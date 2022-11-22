import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, ' please enter your username']
    },
    email: {
      type: String,
      required: [true, 'please enter your email'],
      unique: [true, 'please enter a differnet email']
    },
    password: {
      type: String,
      required: true,
      minLength: [6, 'password is too short']
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const User = model('User', userSchema);

export default User;
