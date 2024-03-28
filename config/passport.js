const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/user");

// Passport strategy for authenticating with google

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile, "profile")
        // callback(null, profile)
        User.findOne({
            where: {
                email: profile.emails[0].value
            }
        })
        .then((existingUser) => {
            if (existingUser) {
                done(null, { user: existingUser, accessToken }); // User already exists
            } else {
                // If the user doesn't exist, create a new user
                User.sync({ force: false })
                    .then(() => {
                        return User.create(
                            {
                                name: profile.displayName,
                                email: profile.emails[0].value,
                                googleId: profile.id
                            },
                        );
                    })
                    .then((newUser) => {
                        // Return the newly created user profile
                        done(null, { user: newUser, accessToken });
                    })
                    .catch((err) => {
                        done(err); // Pass any errors to the callback
                    });
            }
            
        })
        .catch((err) => {
            console.log(err, "line 46")
            done(err); // Pass any errors to the callback
        });
    }
  )
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});