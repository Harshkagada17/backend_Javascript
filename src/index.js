// require("dotenv").config({path: "./.env"});
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import dotenv from "dotenv";
// import   connectDB  from "./db/index.js";
// dotenv.config({ path: "./.env" });

// connectDB();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB();





/*
import express from "express";
const app = express();

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}{DB_NAME}`)
        app.on("error", (err) => {
            console.error("Server error:", err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT} and connected to database ${DB_NAME}`);
        });
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()

*/