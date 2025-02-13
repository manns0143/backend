import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// cloudinary.config({
//     cloud_name: process.env["CLOUDINARY_CLOUD_NAME"],
//     api_key: process.env["CLOUDINARY_API_KEY"],
//     api_secret: process.env["CLOUDINARY_API_SECRET"]
// });


// console.log("Cloudinary Config:", {
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Not Loaded"
// });


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });
        // console.log("file uploaded on cloudinary: ", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        // console.log("error uploading file on cloudinary: ", error);
        return null;
    }
};

export { uploadOnCloudinary };