import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [],
});

export const businessModel = mongoose.model("Business", businessSchema);
