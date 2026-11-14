import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    new ApiError(401, "Invalid or expired access token");
  }

  const user = await User.findById(decodedToken?.id).select(
    "-password -refreshToken",
  );

  if (!user) {
    throw new ApiError(401, "Invalid Access Token");
  }

  req.user = user;
  next();
});
