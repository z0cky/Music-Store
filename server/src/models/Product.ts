import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  rating: { type: Number, required: true },
  image_url: { type: String, required: true },
});

export default mongoose.model('Product', productSchema);
