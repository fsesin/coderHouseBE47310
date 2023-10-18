import mongoose from "mongoose";
import { coursesModel } from "../db/models/courses.model.js";

class CoursesModel {
  async createOne(obj) {
    const createdCourse = await coursesModel.create(obj);
    return createdCourse;
  }

  async findById(id) {
    const course = await coursesModel
      .findById(id)
      .populate("students", ["email", "first_name"]);
    return course;
  }
}

export const coursesManager = new CoursesModel();
