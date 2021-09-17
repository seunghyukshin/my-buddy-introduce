import express from "express";

import { login, verify } from "./controller.js";
import authMiddleware from "../../middlewares/auth.js";
const router = express.Router();

router.post("/login", login);
router.get("/verify", authMiddleware, verify);

export default router;
