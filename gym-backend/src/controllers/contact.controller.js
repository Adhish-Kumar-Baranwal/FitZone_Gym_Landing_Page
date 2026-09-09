import { Contact } from "../models/contact.model.js";
import { sendMail } from "../utils/sendMail.js";

// TODO: Implement Validations on each data receiving

const validate = (data) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/;
  const validationError = {};

    if (data.fullName.trim().length < 3) {
      validationError.fullName = "Full Name cannot be less than 3 characters";
    }
    if (data.phoneNo.length !== 10) {
      validationError.phoneNo = "Phone number cannot be less than 10 digits";
    }
    if (!emailRegex.test(data.emailId)) {
      validationError.emailId = "Email address must be a valid address";
    }
    if (data.subject.trim().length < 5) {
      validationError.subject = "Subject cannot be less than 5 characters";
    }
    if (data.message.trim().length < 5) {
      validationError.message = "Query/Message cannot be less than 5 characters";
    }

    return validationError;
}

const saveContactData = async (req, res) => {
  try {
    console.log("1. saveContactData started");

    const { subject, fullName, emailId, phoneNo, message } = req.body;

    console.log("2. Request body received");

    if (!subject || !fullName || !emailId || !phoneNo || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const errors = validate(req.body);

    if (Object.keys(errors).length !== 0) {
      return res
        .status(400)
        .json({ success: false, errors });
    }

    console.log("3. Validation passed");

    console.log("4. Creating contact in database...");

    const newContact = await Contact.create({
      fullName,
      emailId,
      phoneNo,
      subject,
      message,
    });

    console.log("5. Contact saved to database:", newContact._id);

    console.log("6. Sending email...");

    await sendMail({
      to: process.env.GYM_OWNER_MAIL_ID,
      subject: subject,
      text: `Name: ${fullName}\nEmail: ${emailId}\nPhone: ${phoneNo}\nMessage: ${message}`,
    });

    console.log("7. Sent the mail successfully");

    return res.status(201).json({
      success: true,
      message: "Query has been submitted",
    });

  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { saveContactData };
