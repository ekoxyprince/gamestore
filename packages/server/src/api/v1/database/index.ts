import mongoose from "mongoose";
import env from "../../../config/env.ts";
const connectToDb = () => {
  return mongoose
    .connect(env.db_uri_v1, {
      dbName: "astrogames",
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch(console.error);
};

export default connectToDb;
