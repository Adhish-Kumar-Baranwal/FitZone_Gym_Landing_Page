import { Router } from "express";
import { saveContactData } from "../controllers/contact.controller.js";

const router = Router();

router.route("/contact-form").post(saveContactData);

export default router;
