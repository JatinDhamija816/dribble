import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true,
        unique: true
    }, email: {
        type: String,
        unique: true,
        required: true
    }, password: {
        type: String,
        required: true
    }, policy: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

const user = mongoose.model('user', userSchema)

export default user