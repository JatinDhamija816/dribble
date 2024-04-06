import express from 'express'
import dotenv from 'dotenv'
import { RegisterUser } from '../controllers/Register.js'
import Form from "../model/Form.js";
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;

const router = express.Router()
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'dribble',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});
const upload = multer({ storage: storage });

router.post('/profile', upload.single('image'), async (req, res) => {
    try {
        const { location, checkbox1, checkbox2, checkbox3 } = req.body;
        const { path } = req.file
        const form = new Form({ image: path, location, checkbox1, checkbox2, checkbox3 });
        await form.save();
        res.status(201).send({ message: 'Data Submit successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Failed to Submit Data' });
    }
});
router.post('/register', RegisterUser)
export default router