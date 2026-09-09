import { Router } from "express";
import { saveContactData } from "../controllers/contact.controller.js";

const router = Router();

router.route("/contact-form").post((req, res, next) => {
  console.log("CONTACT FORM REQUEST RECEIVED");
  next();
}, saveContactData);

export default router;
