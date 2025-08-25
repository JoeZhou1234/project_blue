import { Router } from "express";
import passport from "passport";

export const oauthRouter = Router();

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN || "http://localhost:3000";

// Google signin
oauthRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google signin callback
oauthRouter.get("/google/callback", passport.authenticate("google"), async function (req, res) {
  return res.redirect(FRONTEND_DOMAIN);
});
