import express from 'express';
import cors from 'cors';
import musicData from './data/musicStoreData.json';

import productsRouter, { setProducts } from './routes/products';
import artistsRouter, { setArtists } from './routes/artists';
import contactRouter from './routes/contact';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

setProducts(musicData.products);
setArtists(musicData.artists);

app.get('/', (req, res) => {
  res.send('<h1>Music Store API is running!</h1>');
});

app.use('/products', productsRouter);
app.use('/artists', artistsRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
