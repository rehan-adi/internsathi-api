import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dbConnect from './db/index.js';
import authRoute from './routes/authRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Register routes
app.use('/api/auth', authRoute);

dbConnect();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
