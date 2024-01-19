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
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  profilePicture: String;
  age: Number;
}

export { UserSchema, Users };
