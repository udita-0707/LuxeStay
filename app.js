if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const MongoStore = require('connect-mongo');



//Setting up the database
const dbURL = process.env.ATLASDB_URL;
main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(dbURL);
}
// Setting up the database

//Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: dbURL,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 60 * 60
})

store.on("error", (e) => {
    console.log("MONGO SESSION STORE ERROR", e)
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

//Setting up the routes
// app.get("/", (req, res) => {
//     res.render("home.html"); //basic api to get started with express
// })


app.use(session(sessionOptions))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    // console.log(req.locals.success)
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
})


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// app.all("*", (req, res, next) =>{
//     next(new ExpressError("Page Not Found", 404));
// })

//Setting up the routes
app.all("*", (req, res, next) =>{
	next(new ExpressError(404, "Page coming soon!"));
});

//Custom Error Handling
app.use((err, req, res, next) =>{
	let {statusCode=505, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {err});
});

//Setting up the routes
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})