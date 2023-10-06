import mongoose from "mongoose";
const uri =
  "mongodb+srv://wwwbehzadrezaei8:1234@cluster0.kuaiddt.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect To DB ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
