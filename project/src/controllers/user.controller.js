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
    if ([username, email, fullName, password].some((field) => 
    field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // check is user already exists in database
    const existingUser = User.findOne({
        $or: [
            { username },
            { email}
        ]
    })

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    // check for avatar and cover image
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar image is required");
    }

    // upload avatar and cover image on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Avatar image is required");
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