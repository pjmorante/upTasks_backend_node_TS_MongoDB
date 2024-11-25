import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db';
import projectRoutes from './routes/projectRoutes';

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use('/api/projects', projectRoutes)

export default app;