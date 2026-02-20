import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); 
import connectDB from './config/db.js';
import cors from 'cors';
import router from './routes/authRoutes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL, 
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



