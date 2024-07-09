import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SendMailController from './controllers/sendMailController.js';
dotenv.config();
const app = express();
app.use(express.json())
var corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    allowedHeaders: 'Content-Type, Authorization',
    optionsSuccessStatus: 200,
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
}

app.use(cors(corsOptions));
const sendMailController = new SendMailController();

app.post('/', (req, res) => {
    sendMailController.sendMail(req, res);
});

app.listen(process.env.DEFAULT_PORT, () => {
    console.log(`App listening at http://localhost:${process.env.DEFAULT_PORT}`);
});