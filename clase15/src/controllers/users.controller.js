import { UserNotFoundError } from "../services/user-not-found.error.js";
import { usersService } from "../services/users.service.js";

class UsersController {
  findAllUser = async (req, res) => {
    try {
      const result = await usersService.findAll();
      res.status(200).json({ users: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findUserById = async (req, res) => {
    const { idUser } = req.params;
    try {
      const result = await usersService.findById(idUser);
      res.status(200).json({ user: result });
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  createUser = async (req, res) => {
    console.log(req.body);
    try {
      const createdUser = await usersService.createOne(req.body);
      res.status(200).json({ message: "User created", user: createdUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
export const usersController = new UsersController();
