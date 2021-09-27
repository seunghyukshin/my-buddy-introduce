import express from "express";

import login from "./login.js";
import verify from "./verify.js";
import refresh from "./refresh.js";
import verifyRefresh from "./verifyRefresh.js";
import authMiddleware from "../../middlewares/auth.js";
const router = express.Router();

router.post("/login", login);
router.get("/verify", authMiddleware, verify);

export default router;
