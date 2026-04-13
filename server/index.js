import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.router.js"
import userRouter from "./routes/user.router.js"

dotenv.config();
const app = express();
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

const PORT = process.env.PORT || 8000;


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
})

