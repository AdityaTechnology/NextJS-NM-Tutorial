import mongoose, { Schema } from "mongoose";

const InformationSchema = new Schema({
	empname: String,
	address: String,
});

const Info = mongoose.models.Info || mongoose.model("Info", InformationSchema);

export default Info;
