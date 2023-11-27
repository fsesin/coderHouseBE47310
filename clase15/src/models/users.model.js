import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  orders: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Orders",
      },
    ],
    default: [],
  },
});

export const usersModel = mongoose.model("Users", usersSchema);
