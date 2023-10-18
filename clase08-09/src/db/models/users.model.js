import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  gender: {
    type: String,
  },
});

usersSchema.plugin(mongoosePaginate);

export const usersModel = mongoose.model("Users", usersSchema);
