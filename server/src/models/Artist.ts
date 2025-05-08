import mongoose from 'mongoose';

// Pomoćna šema za albume
const albumSchema = new mongoose.Schema({
  album_id: { type: String, required: true },
  title: { type: String, required: true },
  release_date: { type: String, required: true },
  genre: { type: String, required: true },
});

const artistSchema = new mongoose.Schema({
  artist_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  image_url: { type: String, required: true },
  albums: [albumSchema],
});

export default mongoose.model('Artist', artistSchema);
