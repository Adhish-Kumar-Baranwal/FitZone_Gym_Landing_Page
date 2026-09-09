import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import contactRouter from "./routes/contact.routes.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json({ limit: "16kb" }));

app.use(contactRouter);

export { app };
