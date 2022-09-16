import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_URI:
    process.env.NODE_ENV === "production"
      ? process.env.ATLAS_URI
      : process.env.ATLAS_URI,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
  GOOGLE_CLOUD_CLIENT_ID: process.env.GOOGLE_CLOUD_CLIENT_ID,
  GOOGLE_CLOUD_CLIENT_SECRET: process.env.GOOGLE_CLOUD_CLIENT_SECRET,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  FRONTEND_ORIGIN: process.env.FRONTEND_URL,
};
