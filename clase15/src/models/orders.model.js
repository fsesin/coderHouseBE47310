import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Business",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  products: [],
  price: {
    type: Number,
  },
});

export const ordersModel = mongoose.model("Orders", ordersSchema);
