import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }, location: {
        type: String,
        required: true
    }, checkbox1: {
        type: Boolean
    }, checkbox2: {
        type: Boolean
    }, checkbox3: {
        type: Boolean
    }
}, { timestamps: true });
const Form = mongoose.model('Form', formSchema);

export default Form