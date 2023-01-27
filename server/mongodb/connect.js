import mongoose from "mongoose";

const connectDB = (url) => {
  try {
    mongoose.set("strictQuery", true);

    mongoose.connect(url, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
