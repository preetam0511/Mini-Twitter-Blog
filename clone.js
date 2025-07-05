import mongoose from "mongoose";
const cloneSchema = new mongoose.Schema({
  text: String
});
const Clone = mongoose.model('Clone', cloneSchema);
export default Clone;