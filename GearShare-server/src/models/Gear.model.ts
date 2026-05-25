import mongoose, { Schema } from "mongoose";

const gearSchema = new mongoose.Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['Laptops', 'Cameras', 'Audios', 'Drones', 'Components', 'Others'],
    required: true,
  },
  brand: { type: String, required: true },
  modelName: { type: String, required: true },
  specs: { type: Map, of: String, default: {} },
  preicePerDay: { type: Number, rquired: true, min: 0 },
  images: { type: [String], required: true },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true })

export const Gear=mongoose.model('Gears',gearSchema)