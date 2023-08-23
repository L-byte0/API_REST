import "dotenv/config";
import "./database/connection.js";
import authrouter from "./routes/auth.route.js";
import express from "express";
const app = express();

app.use(express.json());
app.use("/api/v1", authrouter);

app.listen(process.env.PORT, () => console.log("🎇🎇🎇 http://localhost:5000"));
