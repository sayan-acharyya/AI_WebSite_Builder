
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(404).json({
                success: false,
                message: "Token not found"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRITE)

        req.user = await User.findById(decoded.id)
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error in token"
        })
    }
}

export default isAuth;