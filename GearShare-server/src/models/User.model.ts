import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  verificationStatus: {
    type: String,
    enum: ['unverified', 'pending', 'verified'],
    default:'unverified'
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User