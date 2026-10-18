import express from "express";
import { loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/login").post(loginUser);

router.route("/logout").post();

router.route("/post").post();

export default router;
