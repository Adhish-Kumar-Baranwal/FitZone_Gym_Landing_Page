import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ContactForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    emailId: "",
    subject: location.state?.subject || "",
    message: location.state?.message || "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,})+$/;
    const validationError = {};

    if (formData.fullName.trim().length < 3) {
      validationError.fullName = "Full Name cannot be less than 3 characters";
    }
    if (formData.phoneNo.length !== 10) {
      validationError.phoneNo = "Phone number cannot be less than 10 digits";
    }
    if (!emailRegex.test(formData.emailId)) {
      validationError.emailId = "Email address must be a valid address";
    }
    if (formData.subject.trim().length < 5) {
      validationError.subject = "Subject cannot be less than 5 characters";
    }
    if (formData.message.trim().length < 5) {
      validationError.message =
        "Query/Message cannot be less than 5 characters";
    }

    return validationError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setFieldErrors({});

    const errors = validate();

    if (Object.keys(errors).length !== 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://fitzone-gym-landing-page.onrender.com/contact-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      toast.success("Your Query has been sent successfully");
      setFormData({
        fullName: "",
        phoneNo: "",
        emailId: "",
        subject: "",
        message: "",
      });
      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Query has not been sent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10 lg:py-12">
      <div className="text-center">
        <p className=" text-sm text-orange-500 uppercase font-semibold mb-2">
          Contact Us
        </p>
        <div className="max-w-4xl mx-auto flex-center gap-4 my-2 md:my-3">
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            Got questions? We'd love to hear from you.
          </p>
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
        </div>
      </div>

      {error && <p className="text-sm text-center text-red-500">{error}</p>}
      {success && (
        <p className="text-sm text-center text-green-500">{success}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex max-w-xl mx-auto pt-5 flex-col gap-y-4"
      >
        <label className="contact-label" htmlFor="fullName">
          Full Name:{" "}
        </label>
        <input
          type="text"
          value={formData.fullName}
          name="fullName"
          onChange={handleChange}
          className="contact-input"
          placeholder="Type your full name: John Doe"
        />
        {fieldErrors.fullName && (
          <p className="text-sm text-center text-red-500">
            {fieldErrors.fullName}
          </p>
        )}

        <label className="contact-label" htmlFor="phoneNo">
          Phone No.:{" "}
        </label>
        <input
          type="tel"
          value={formData.phoneNo}
          onKeyDown={(event) => {
            if (
              !/^\d$/.test(event.key) &&
              ![
                "Backspace",
                "Delete",
                "Tab",
                "ArrowLeft",
                "ArrowRight",
              ].includes(event.key)
            ) {
              event.preventDefault();
            }
          }}
          required
          maxLength={10}
          minLength={10}
          name="phoneNo"
          onChange={handleChange}
          className="contact-input"
          placeholder="Type your phone number: 12345 67890"
        />
        {fieldErrors.phoneNo && (
          <p className="text-sm text-center text-red-500">
            {fieldErrors.phoneNo}
          </p>
        )}

        <label className="contact-label" htmlFor="emailId">
          Email ID:{" "}
        </label>
        <input
          type="email"
          value={formData.emailId}
          required
          name="emailId"
          onChange={handleChange}
          className="contact-input"
          placeholder="Type your Email ID: example@gmail.com"
        />
        {fieldErrors.emailId && (
          <p className="text-sm text-center text-red-500">
            {fieldErrors.emailId}
          </p>
        )}

        <label className="contact-label" htmlFor="subject">
          Subject:{" "}
        </label>
        <input
          type="text"
          value={formData.subject}
          required
          name="subject"
          onChange={handleChange}
          className="contact-input"
          placeholder="Subject of your query"
        />
        {fieldErrors.subject && (
          <p className="text-sm text-center text-red-500">
            {fieldErrors.subject}
          </p>
        )}

        <label className="contact-label" htmlFor="message">
          Your Query:{" "}
        </label>
        <textarea
          required
          value={formData.message}
          rows="6"
          name="message"
          onChange={handleChange}
          className="contact-input"
          placeholder="Type your query/message here"
        />
        {fieldErrors.message && (
          <p className="text-sm text-center text-red-500">
            {fieldErrors.message}
          </p>
        )}

        <div className="flex-center mt-4">
          <button
            disabled={loading}
            type="submit"
            className="cta-btn w-fit px-8 md:w-[50%] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
