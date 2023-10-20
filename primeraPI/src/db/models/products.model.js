import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
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

productsSchema.plugin(mongoosePaginate);

export const productsModel = model("Products", productsSchema);
