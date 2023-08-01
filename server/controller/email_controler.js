
import sentEmailModel from "../model/sentEmail.js"

export const saveSentEmail = (req, res) => {
    try {
        const email = sentEmailModel(req.body);
        email.save();
        res.status(200).json("Email saved successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}