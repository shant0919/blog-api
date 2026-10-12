import { setServers } from "node:dns";

// Force Google (8.8.8.8) and Cloudflare (1.1.1.1) DNS
setServers(["1.1.1.1", "8.8.8.8"]);

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("MongoDB connection failed!");
  });
