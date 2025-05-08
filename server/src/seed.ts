import mongoose from 'mongoose';
import Artist from './models/Artist';
import Product from './models/Product';
import data from './data/musicStoreData.json';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/music-store';

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear old data
    await Artist.deleteMany();
    await Product.deleteMany();
    console.log('Existing collections cleared');

    // Insert new data
    await Artist.insertMany(data.artists);
    await Product.insertMany(data.products);
    console.log('Seeded artists and products successfully');

    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
};

seedDatabase();
