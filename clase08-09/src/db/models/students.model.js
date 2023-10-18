import mongoose, { Schema, model } from "mongoose";

// crear el esquema
const studentsSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Courses",
  },
  nota: {
    type: Number,
    required: true,
  },
});

// crear ehttps://cloud.mongodb.com/v2/635427b0c265f7007d3ff763#/dataFederationl modelo/col
export const studentsModel = model("Students", studentsSchema);
