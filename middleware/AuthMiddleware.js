import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import config from "../config/env.js";

dotenv.config();
const secret = config.ACCESS_TOKEN_SECRET_KEY;
const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(decoded);
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;
