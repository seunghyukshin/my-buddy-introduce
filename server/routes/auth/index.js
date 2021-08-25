import express from "express";
import { login, verify } from "./controller.js";
const router = express.Router();

router.post("/login", login);
router.get("/verify", verify);

export default router;
