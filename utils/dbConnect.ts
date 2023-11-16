import mongoose from "mongoose";

async function connect() {
  mongoose
    .connect(process.env.MONGO_DB_URI!)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
}

export default connect;
