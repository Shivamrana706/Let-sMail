import mongoose from "mongoose";


const sentEmailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,

    },
    message: {
        type: String,
    },
    subject: {
        type: String,
    },
    name: String,
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true
    }

})

const sentEmailModel = mongoose.model('Mail', sentEmailSchema);

export default sentEmailModel;