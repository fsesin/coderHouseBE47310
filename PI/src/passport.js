import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import { usersManager } from "./managers/usersManager.js";
import { cartsManager } from "./managers/cartsManager.js";
import config from "./config.js";
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: config.google_client_id,
      clientSecret: config.google_client_secret,
      callbackURL: config.google_callback_url,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile", profile._json);
      try {
        const user = await usersManager.findByEmail(profile._json.email);
        //login
        if (user) {
          if (user.fromGoogle) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
        // signup
        const createdCart = await cartsManager.createOne({ products: [] });
        const infoUser = {
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          email: profile._json.email,
          password: " ",
          cart: createdCart._id,
          fromGoogle: true,
        };
        const createdUser = await usersManager.createOne(infoUser);
        done(null, createdUser);
      } catch (error) {
        done(error);
      }
      done(null, false);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await usersManager.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
