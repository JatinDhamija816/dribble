import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

export default Form