import mongoose from "mongoose";

const DBConnect = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/empdemo");
		console.log("MongoDB Connected");
	} catch (err) {
		console.log(err);
	}
};

export default DBConnect;
