import { Schema, model } from 'mongoose';

//review schema in products model

const reviewsSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    comment: { type: String, required: true }
  },
  { timestamps: true }
);

//schema for product model
const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },

    name: {
      type: String,
      required: [true, ' please enter your username']
    },

    image: {
      type: String,
      required: [true, 'please enter a valid image']
    },

    brand: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    reviews: [reviewsSchema],

    avgRating: {
      type: Number,
      required: true,
      default: 0
    },

    numReviews: {
      type: Number,
      required: true,
      default: 0
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    InStock: {
      type: Number,
      required: true,
      default: 0
    }
  },

  {
    timestamps: true
  }
);

const Product = model('Product', productSchema);

export default Product;
