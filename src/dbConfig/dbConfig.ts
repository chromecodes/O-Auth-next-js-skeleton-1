import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {});

    connection.on("error", (error) => {
      console.error("Db connection failed", error);
      process.exit();
    });
  } catch (error) {
    console.error("Db connection failed", error);
  }
}
