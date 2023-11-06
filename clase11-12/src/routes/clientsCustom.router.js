import CustomRouter from "./CustomRouter.js";
import { clientsManager } from "../managers/clientsManager.js";

class ClientRouter extends CustomRouter {
  init() {
    this.get("/:username", async (req, res) => {
      const { username } = req.params;
      try {
        const client = await clientsManager.getByUsername(username);
        if (!client) {
          return res.errorResponse("Client not found");
        }
        res.successResponse("Client found", client);
      } catch (error) {
        res.serverError(error);
      }
    });
  }
}

export const clientsCustomRouter = new ClientRouter();
