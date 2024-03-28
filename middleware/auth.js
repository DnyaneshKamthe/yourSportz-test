const passport = require("passport");

const successfullLogin = async (req, res) => {
  if (req?.user) {
    return res.status(200).json({ message: "successfully logged in", user: req.user });
  } else {
    return res.status(403).json({ message: "not authorized" });
  }
};

const loginFailure = async (req, res) => {
  res.status(401).json({ message: "login failure" });
};

const googleAuthLogin = async (req, res) => {
    passport.authenticate("google", ["profile", "email"])(req, res);
};

const googleAuthCallback = async (req, res) => {
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/auth/login/failed",
    })(req, res);
};

const userLogout = async (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
};

module.exports = {
    successfullLogin,
    loginFailure,
    googleAuthLogin,
    googleAuthCallback,
    userLogout,
}