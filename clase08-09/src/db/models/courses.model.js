import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Users",
    },
  ],
  teacher: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
});

export const coursesModel = mongoose.model("Courses", coursesSchema);
