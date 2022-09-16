import passport from "passport";
import GoogleOAuth20 from "passport-google-oauth20";
const GoogleStrategy = GoogleOAuth20.Strategy;
import PassportFacebook from "passport-facebook";
const FacebookStrategy = PassportFacebook.Strategy;

import env from "./env.js";
import UserModel from "../models/userModel.js";
import { generateUserName, getFirstName, getLastName } from "../utils/utils.js";
import { FACEBOOK_AUTH_CALLBACK, GOOGLE_AUTH_CALLBACK } from "./config.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: env.GOOGLE_CLOUD_CLIENT_ID,
      clientSecret: env.GOOGLE_CLOUD_CLIENT_SECRET,
      callbackURL: GOOGLE_AUTH_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("FB Profile", profile);
      UserModel.findOrCreate(
        { googleId: profile.id },
        {
          googleId: profile.id,
          provider: profile.provider,
          username: generateUserName(profile._json.given_name),
          firstname: profile._json.given_name,
          lastname: profile?._json.family_name,
          displayName: profile.displayName,
          email: profile.email,
          profilePicture: profile?._json?.picture,
          emailVerified: profile.email_verified,
          secret: accessToken,
          isGoogleAuth: true,
          uid: profile.id,
        },
        function (err, user) {
          return done(err, user);
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: env.FACEBOOK_APP_ID,
      clientSecret: env.FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_AUTH_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("FB Strategy Profile", profile);
      UserModel.findOrCreate(
        { facebookId: profile.id },
        {
          facebookId: profile.id,
          provider: profile.provider,
          username: generateUserName(profile.displayName),
          firstname: getFirstName(profile.displayName),
          lastname: getLastName(profile.displayName),
          displayName: profile.displayName,
          email: profile?.email,
          profilePicture: profile?._json?.picture,
          emailVerified: profile?.email_verified,
          secret: accessToken,
          isFacebookAuth: true,
          uid: profile.id,
        },
        function (err, user) {
          return done(err, user);
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.uid);
});

passport.deserializeUser((uid, done) => {
  UserModel.findOne({ uid }, (err, user) => {
    done(null, user);
  });
});
