import catModel from "../models/catModel.js";
import fs from "fs";

// all cat list
const listCat = async (req, res) => {
  try {
    const cats = await catModel.find({});
    res.json({ success: true, data: cats });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// add cat
const addCat = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  console.log("req.body.menu_name", req.body.name);
  const cat = new catModel({
    menu_name: req.body.name,

    menu_image: image_filename,
  });
  try {
    await cat.save();
    res.json({ success: true, message: "Category Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// delete cat
const removeCat = async (req, res) => {
  try {
    const cat = await catModel.findById(req.body.id);
    fs.unlink(`uploads/${cat.menu_image}`, () => {});

    await catModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "cat Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { listCat, addCat, removeCat };
