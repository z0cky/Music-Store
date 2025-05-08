import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/music-store');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}
