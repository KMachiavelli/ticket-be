import mongoose from "mongoose";

const mongoConnect = () => {
  const URI_CONFIG = `${process.env.MONGO_DB_URI!}${process.env.MONGO_DB_NAME}`;
  mongoose.connect(URI_CONFIG);
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () =>
    console.log(`Connected to MongoDB ${process.env.MONGO_DB_NAME}`)
  );
};

export default mongoConnect;
