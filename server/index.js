import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/DB.js'
import router from './routes/Route.js'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary'
import Form from "./model/Photo.js";

dotenv.config()

// Initialize Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
// Set up multer storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'dribble-form',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});

const upload = multer({ storage: storage });

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/', router)
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { location } = req.body;
        const { path } = req.file;

        const form = new Form({
            image: path,
            location: location
        });

        await form.save();
        res.status(201).send({ message: 'Image uploaded successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to upload image' });
    }
});
const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log("Server start")
})
Connection()