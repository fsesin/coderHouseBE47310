import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

// router.get("/", async (req, res) => {});

// router.get("/:idProduct", async (req, res) => {});

router.post("/",upload.single('productimage') ,async (req, res) => {
   console.log(req);
   
    res.send('Probando multer')
});

// router.delete("/:idProduct", async (req, res) => {});

// router.put("/:idProduct", async (req, res) => {});

export default router