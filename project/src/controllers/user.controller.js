import { asyncHandler } from '../utils/asyncHandler.js ';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from '../utils/ApiResponse.js';
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler ( async (req, res) => {
    const { username, email, fullName, password } = req.body;
    // console.log("email: ", email);

    // if (username?.trim() === "" ||
    //     email?.trim() === "" ||
    //     fullName?.trim() === "" ||
    //     password?.trim() === "") {
    //     throw new ApiError(400, "All fields are required");
    // }

    // field validation --> check if fields are empty
    // fix issue --> check if any field is undefined or null
    if ([username, email, fullName, password].some((field) => 
    field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // check is user already exists in database
    const existingUser = await User.findOne({
        $or: [
            { username },
            { email}
        ]
    })

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    // check for avatar and cover image
    // const avatarLocalPath = req.files?.avatar?.[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    let avatarLocalPath;
    if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
        avatarLocalPath = req.files.avatar[0].path;
    }

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar image is required1");
    }

    // upload avatar and cover image on cloudinary
    console.log("avatarLocalPath:", avatarLocalPath);
    console.log("coverImageLocalPath:", coverImageLocalPath);
    
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Avatar image is required2");
    }

    // create new user
    const user = await User.create({
        username: username.toLowerCase(),
        email,
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        password
    })

    // check is user is created
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "User registration failed");
    }

    // send response
    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})

export { registerUser }