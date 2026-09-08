import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        emailId: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

export const Contact = mongoose.model("Contact", contactSchema)