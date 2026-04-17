
import { generateResponse } from "../config/openRouter.js";

// helper function
const extractJSON = (text) => {
    try {
        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);
    } catch (err) {
        throw new Error("Invalid JSON from AI: " + text);
    }               
};

export const generatedemo = async (req, res) => {
    try {
        const result = await generateResponse("generate a html code for the gym website home page ");

        // 🔥 extract content
        const content = result.choices?.[0]?.message?.content;

        if (!content) {
            return res.status(500).json({
                success: false,
                message: "No content from AI"
            });
        }

        // 🔥 parse JSON safely
        let parsed;
        try {
            parsed = extractJSON(content);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                raw: content
            });
        }

        // ✅ send clean JSON
        return res.status(200).json({
            success: true,
            data: parsed
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



export const getCurrentUser = async (req, res) => {
    try {
        if (!req.user) {
            return res.json({ user: null })
        }
        return res.json(req.user);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `error in getCurrentUser ${error}`
        })
    }
}

