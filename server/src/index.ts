import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


const dataPath = path.join(__dirname, 'data', 'musicStoreData.json');
let musicData: any = [];

if (fs.existsSync(dataPath)) {
  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  musicData = JSON.parse(fileContent);
} else {
  console.error(`JSON file not found at ${dataPath}`);
}


app.get('/', (req, res) => {
  res.send('<h1>Music Store API is running!</h1>');
});


app.get('/artists', (req, res) => {
  if (musicData.artists) {
    res.json(musicData.artists);
  } else {
    res.status(500).json({ error: 'Artists data not found' });
  }
});


app.get('/products', (req, res) => {
  if (musicData.products) {
    res.json(musicData.products);
  } else {
    res.status(500).json({ error: 'Products data not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
