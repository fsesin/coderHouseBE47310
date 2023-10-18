import { clientsModel } from "../db/models/clients.model.js";

class ClientsManager {
  async findAggregation() {
    const response = await clientsModel.aggregate([
      { $match: { calificacion: { $gt: 5 } } },
      {
        $group: {
          _id: "$gender",
          gender_count: { $count: {} },
          prom_calificacion: { $avg: "$calificacion" },
        },
      },
      {
        $match: { gender_count: { $gte: 5 } },
      },
      { $sort: { prom_calificacion: 1 } },
      //{ $count: "clients5orMore" },
    ]);
    return response;
  }
}

export const clientsManager = new ClientsManager();
