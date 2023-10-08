import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 10,
  },
  description: {
    type: String,
  },
});

export const productsModel = model("Products", productsSchema);
