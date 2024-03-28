const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const passport = require('passport');
const cookieSession = require("cookie-session");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const passportSetup = require("./config/passport");
var indexRouter = require('./routes/index');
const path = require('path')

const publicPath = path.join(__dirname, 'public'); //
// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static(publicPath));
// Middleware for cookie session management
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

// Middleware to initialize Passport authentication
app.use(passport.initialize());

// Middleware to manage Passport session
app.use(passport.session());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    }
));

// routes
app.use('/', indexRouter);
app.use("/", userRoutes);
app.use("/auth", authRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
