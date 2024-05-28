import express from "express";
import { addCat, listCat, removeCat } from "../controllers/catController.js";
import multer from "multer";
const catRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

catRouter.get("/listCat", listCat);
catRouter.post("/addCat", upload.single("image"), addCat);
catRouter.post("/removeCat", removeCat);

export default catRouter;
