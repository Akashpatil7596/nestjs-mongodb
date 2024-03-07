import { Schema } from 'mongoose';

const MoviesSchema = new Schema({
  awards: {
    nominations: Number,
    text: String,
    wins: Number,
  },
  cast: [{ type: String }],
  countries: [{ type: String }],
  directors: [{ type: String }],
  fullplot: { type: String },
  genres: [{ type: String }],
  imdb: {
    rating: Number,
    votes: Number,
  },
  languages: [{ type: String }],
  lastupdated: { type: String },
  num_mflix_comments: { type: Number },
  plot: { type: String },
  poster: { type: String },
  rated: { type: String },
  released: { type: Date },
  runtime: { type: Number },
  title: { type: String },
  tomatoes: {
    critic: {
      meter: Number,
      numReviews: Number,
      rating: Number,
    },
    fresh: Number,
    lastUpdated: Date,
    rotten: Number,
    viewer: {
      meter: Number,
      numReviews: Number,
      rating: Number,
    },
  },
  type: String,
  year: Number,
});

interface Users {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture: string;
  age: number;
}

export { MoviesSchema };
