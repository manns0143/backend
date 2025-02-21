import { asyncHandler } from '../utils/asyncHandler.js ';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from '../utils/ApiResponse.js';
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave : false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Token generation failed");
    }
}

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

const loginUser = asyncHandler ( async (req, res) => {
    const { username, email, password } = req.body;

    // check if username or email is provided
    if (!username && !email) {
        throw new ApiError(400, "Username or email is required");
    }

    // check if user is registered
    const user = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // check password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "invalid credentials");
    }

    // generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = User.findById(user._id).select("-password -refreshToken");

    // create cookie and send response
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json( new ApiResponse (
        200,
        {
            user: loggedInUser, accessToken, refreshToken
        },
        "User logged in successfully"
    ))
})

const logoutUser = asyncHandler ( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        { 
            $set: {
                refreshToken: undefined
            } 
        },
        { 
            new: true 
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json( new ApiResponse (
        200,
        {},
        "User logged out successfully"
    ))
})

export { registerUser, loginUser, logoutUser }