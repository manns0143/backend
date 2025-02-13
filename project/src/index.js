import dotenv from "dotenv";
dotenv.config(); // specify path as well if .env file is not in root directory

import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.error("server error: ", error);
        process.exit(1);
    })
    app.listen(port, () => {
        console.log("server is listening on port: ", port);
    })
})
.catch((error) => {
    console.error("mongodb connection failed: ", error);
    process.exit(1);
})

// import mongoose from "mongoose";
// import { DB_NAME } from "src/constants.js";
// import express from "express";
// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("error: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log("app is listening on port: ", process.env.PORT);
//         })
//     } catch (error) {
//         console.error("error: ", error);
//         throw error
//     }
// })()