import passport from "passport";
import { usersManager } from "./managers/usersManager.js";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GithubStrategy } from "passport-github2";
import { hashData, compareData } from "./utils.js";

// LOCAL
passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const userDB = await usersManager.getByEmail(email);
        if (userDB) {
          return done(null, false);
        }
        const hashedPassword = await hashData(password);
        const createdUser = await usersManager.createOne({
          ...req.body,
          password: hashedPassword,
        });
        done(null, createdUser);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const userDB = await usersManager.getByEmail(email);
        if (!userDB) {
          return done(null, false);
        }
        const isValid = await compareData(password, userDB.password);
        if (!isValid) {
          return done(null, false);
        }
        done(null, userDB);
      } catch (error) {
        done(error);
      }
    }
  )
);

// GITHUB

passport.use(
  new GithubStrategy(
    {
      clientID: "Iv1.4abc417e780ff128",
      clientSecret: "96ec8075a403b1176b9ddb7dcb0d94ff9fb64b80",
      callbackURL: "http://localhost:8080/api/users/github",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log("profile", profile);
      done(null, false);
      // try {
      //   const userDB = await usersManager.getByEmail(profile.email);
      //   // login
      //   if (userDB) {
      //     if (userDB.from_github) {
      //       return done(null, userDB);
      //     } else {
      //       return done(null, false);
      //     }
      //   }
      //   // signup
      //   const newUser = {
      //     first_name: "prueba",
      //     last_name: "test",
      //     email: profile.email,
      //     password: "fekhflvlv",
      //     from_github: true,
      //   };
      //   const createdUser = await usersManager.createOne(newUser);
      //   done(null, createdUser);
      // } catch (error) {
      //   done(error);
      // }
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("test");
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await usersManager.getById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
