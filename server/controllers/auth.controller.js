import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const googleAuth = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "email is required"
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ name, email, avatar });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRITE,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // change to true in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User Logged In Successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `error in googleAuth ${error}`
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `error in logout ${error}`
        });
    }
};
