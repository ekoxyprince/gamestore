import { config } from "dotenv";
config();
const env = process.env;

export default {
  port: env.PORT,
  db_uri_v1: env.DB_URI!,
  jwt_secret: env.JWT_SECRET!,
  domain: "astrodev.com",
};
