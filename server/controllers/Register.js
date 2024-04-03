import user from "../model/Register.js";
import bcrypt from 'bcrypt'
export const RegisterUser = async (req, res) => {
    try {
        const { name, username, email, password, policy } = req.body
        if (!name || !username || !email || !password || !policy) {
            return res.status(401).json({
                error: "Please Fill all the Details"
            })
        }
        if (password.length < 6) {
            return res.status(422).json({
                error: "Password Length must be greater than 6"
            })
        }
        const usernameExits = await user.findOne({ username })
        if (usernameExits) {
            return res.status(422).json({
                error: 'Username has already been taken'
            })
        }
        const emailExists = await user.findOne({ email })
        if (emailExists) {
            return res.status(422).json({
                error: 'Email already Exist'
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new user({ name, username, email, password: hashPassword, policy })
        await newUser.save()
        return res.status(201).json({
            msg: 'User Register Successfully'
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error While Register",
            error
        })
    }
}