import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db';

connectDB();

const app = express();

export default app;