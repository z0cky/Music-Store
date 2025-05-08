import express from 'express';
import cors from 'cors';
import { connectDB } from './db';

import productsRouter from './routes/products';
import artistsRouter from './routes/artists';
import contactRouter from './routes/contact';

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Music Store API is running!</h1>');
});

app.use('/products', productsRouter);
app.use('/artists', artistsRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
