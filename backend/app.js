import "dotenv/config";
import { sequelize } from "./datasource.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { oauthRouter } from "./routers/oauth_router.js";
import { usersRouter } from "./routers/users_router.js";
import { User } from "./models/user.js";

const PORT = 4000;
const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_DOMAIN].filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }),
);

try {
  await sequelize.authenticate();
  await sequelize.sync({ alter: { drop: false } });
  console.log("✅ Database connection established successfully");
} catch (error) {
  console.error("❌ Unable to connect to the database:", error);
}

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) { done(null, JSON.stringify(user)); });
passport.deserializeUser(function (user, done) { done(null, JSON.parse(user)); });

/**
 * Google OAuth Configuration
 * Uses environment variables for both development and production
 */
const GoogleCredentials = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || `${process.env.BACKEND_URL || 'http://localhost:4000'}/auth/google/callback`
};

passport.use(
  new GoogleStrategy(GoogleCredentials, async function (accessToken, refreshToken, profile, done) {
    try {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) user = await User.create({ googleId: profile.id, displayName: profile.displayName });
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }),
);

app.use("/auth/", oauthRouter);
app.use("/api/users/", usersRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`🚀 Project Blue backend running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  }
});