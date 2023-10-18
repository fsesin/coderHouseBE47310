import { studentsModel } from "../db/models/students.model.js";

class StudentsManager {
  async findAll() {
    const response = await studentsModel.find();
    return response;
  }

  async findById(id) {
    const response = await studentsModel.findById(id);
    return response;
  }

  async createOne(obj) {
    const response = await studentsModel.create(obj);
    return response;
  }

  async updateOne(id, obj) {
    const response = await studentsModel.updateOne({ _id: id }, { obj });
    return response;
  }

  async deleteOne(id) {
    //const response = await studentsModel.deleteOne({_id:id})
    const response = await studentsModel.findByIdAndDelete(id);
    return response;
  }
}

export const studentsManager = new StudentsManager();
