import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

export const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);