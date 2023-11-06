import passport from "passport";
import { usersManager } from "./managers/usersManager.js";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GithubStrategy } from "passport-github2";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { hashData, compareData } from "./utils.js";
const JWT_SECRET = "jwtSECRET";
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
      clientID: "Iv1.9789a6235492e41c",
      clientSecret: "249ff058577958a68ec260598c4a9dfa007f6559",
      callbackURL: "http://localhost:8080/api/sessions/github",
    },
    async function (accessToken, refreshToken, profile, done) {
      //console.log("profile", profile);
      try {
        const userDB = await usersManager.getByEmail(profile._json.email);
        // login
        if (userDB) {
          if (userDB.from_github) {
            return done(null, userDB);
          } else {
            return done(null, false);
          }
        }
        // signup
        const newUser = {
          first_name: profile._json.name.split(" ")[0],
          last_name: profile._json.name.split(" ")[1] || "",
          email: profile._json.email || profile.emails[0].value,
          password: " ",
          from_github: true,
        };
        const createdUser = await usersManager.createOne(newUser);
        done(null, createdUser);
      } catch (error) {
        done(error);
      }
    }
  )
);

// JWT
// passport.use(
//   "jwt",
//   new JWTStrategy(
//     {
//       secretOrKey: JWT_SECRET,
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     },
//     async (jwt_payload, done) => {
//       console.log("---jwt-passport---", jwt_payload);
//       done(null, jwt_payload);
//     }
//   )
// );

// JWT - COOKIES

const fromCookies = (req) => {
  return req.cookies.token;
};

passport.use(
  "jwt",
  new JWTStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([fromCookies]),
    },
    async (jwt_payload, done) => {
      console.log("---jwt-passport---", jwt_payload);
      done(null, jwt_payload);
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
