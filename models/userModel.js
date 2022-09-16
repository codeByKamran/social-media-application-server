import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    displayName: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    email: { type: String },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: [],
    uid: String,
    isGoogleAuth: { type: Boolean, default: false },
    isFacebookAuth: { type: Boolean, default: false },
    provider: { type: String, default: "email_password" },
    googleId: { type: String },
    facebookId: { type: String },
    emailVerified: { type: String, default: false },
    secret: { type: String },
  },
  { timestamps: true }
);

UserSchema.plugin(findOrCreate);
UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
