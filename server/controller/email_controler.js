
import { EmailModel } from "../model/sentEmail.js"

export const saveSentEmail = async (req, res) => {
    try {
        const email = await EmailModel(req.body);
        email.save();
        res.status(200).json("Email saved successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getEmailsFromType = async (req, res) => {
    try {
        let emails
        if (req.params.type === 'sent') {
            emails = await EmailModel.find({ type: req.params.type });
        }
        else if (req.params.type === 'bin') {
            emails = await EmailModel.find({ type: '' })
            // console.log("bin", emails)
        }
        else if (req.params.type === 'starred') {
            emails = await EmailModel.find({ starred: true })
            // console.log("stare", emails)
        }
        else if (req.params.type === 'allMails') {
            emails = await EmailModel.find({})
        }
        res.status(200).json(emails)
    } catch (error) {
        res.status(500).json(error);
    }
}
export const moveEmailsToBin = async (req, res) => {
    try {
        await EmailModel.updateMany({ _id: { $in: req.body } }, { $set: { bin: true, starred: false, type: '' } })
        return res.status(200).json("Emails has been sucessfully moved to Bin");
    } catch (error) {
        return res.status(500).json(error);
    }
}
export const deleteEmails = async (req, res) => {
    try {
        await EmailModel.deleteMany({ _id: req.body });
        return res.status(200).json('Emails has successfull deleted');
    } catch (error) {
        return res.status(500).json(error)

    }
}
export const starToggle = async (req, res) => {
    try {
        // console.log(req)
        await EmailModel.updateMany({ _id: req.body.id }, { $set: { starred: req.body.value } })

        return res.status(200).json('Star has successfull toggle');
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)

    }
}
