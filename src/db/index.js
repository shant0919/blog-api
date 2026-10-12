import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(
      `Database connected successfully: ${connnectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("Something went wrong while connecting to database:", error);
  }
};

export default connectDB;
