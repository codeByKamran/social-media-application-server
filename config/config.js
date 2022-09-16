import env from "./env.js";

export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? `${env.FRONTEND_ORIGIN}/`
    : "http://localhost:3000/";

export const GOOGLE_AUTH_CALLBACK =
  process.env.NODE_ENV === "production"
    ? "https://social-media-application-back.herokuapp.com/auth/google/callback"
    : "/auth/google/callback";

export const FACEBOOK_AUTH_CALLBACK =
  process.env.NODE_ENV === "production"
    ? "https://social-media-application-back.herokuapp.com/auth/facebook/callback/"
    : "/auth/facebook/callback";
