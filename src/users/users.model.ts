import { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profilePicture: String,
  age: Number,
});

interface Users {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture: string;
  age: number;
}

export { UserSchema, Users };
