import mongoose, { Schema } from "mongoose";

const bookingSchema = new mongoose.Schema({
  gearID: { type: Schema.Types.ObjectId, ref: 'Gear', required: true },
  renterId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ['pending', 'approved', 'active', 'completed', 'cancel'],
    default: 'pending'
  }
}, { timestamps: true })

export const Booking=mongoose.model('Booking',bookingSchema)