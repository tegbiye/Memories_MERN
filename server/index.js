import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('./posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://tegbiye_user:tegbiye12345@cluster0.ockeqym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
        .then(() => app.listen(PORT, () => console.log(`Server runnning on port: http://localhost:${PORT}`)))
        .catch((error) => console.log(`${error} did not connect`));




// https://www.mongodb.com/cloud/atlas

