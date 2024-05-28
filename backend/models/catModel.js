import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  menu_name: { type: String, required: true },

  menu_image: { type: String, required: true },
});

const catModel = mongoose.models.cat || mongoose.model("cat", catSchema);
export default catModel;
