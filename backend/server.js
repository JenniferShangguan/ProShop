import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

import router from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();
connectDB()

dotenv.config()
// console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send("API is running")
})

app.use('/api/products', router)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))