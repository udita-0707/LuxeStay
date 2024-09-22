const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const { req } = require("express/lib/response.js");
// app.use(cookieParser("secretcode"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/getsignedcookie", (req, res) => {
// 	res.cookies("color", "red", {signed: true});
// 	res.send("done!");
// });

// app.get("/verify", (req, res) => {
// 	console.log("req.cookie")
// 	res.send(req.signedCookies);
// });

// app.get("/getcookies", (req, res) => {
// 	res.cookie("greet", "hello");
// 	res.send("sent you some cookies");
// })

// app.get("/",(req, res) => {
// 	res.send("Hi, I am root!");
// })

// app.use("/users", users);
// app.use("/posts", posts);

const sessionOptions = {
        secret: "mysupersecretstring",
        resave: false,
        saveUninitialized: true
}
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
app.get('/register', (req, res) => {
    let {name = "Anonymous"} = req.query;
    req.session.name = name;
    // req.flash('success', 'user registered successfully');
    if(name==="Anonymous"){
        req.flash('error', 'user registration failed');
    }else{
        req.flash('success', 'user registered successfully');
    }
    // res.send(`Welcome, ${name}!`);
    res.redirect('/hello');
})

app.get('/hello', (req, res) => {
    // let {name = "Guest"} = req.query;
    // req.session.name = name;
    // res.send(`hello, ${req.session.name}`);
    // console.log(req.flash('success'));
    // res.render("page.ejs", {name:req.session.name, msg: req.flash('success')});
    // res.locals.messages = req.flash('success');
    // res.locals.error = req.flash('error');
    res.render("page.ejs", {name:req.session.name});
})
// app.get("/requestcount", (req, res) => {
//     // req.session.count = 1;
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You send a request ${req.session.count} times`);
// })
// app.get("/test",(req, res) => {
//     res.send("test successful");
// })

app.listen(3000, () => {
	console.log("server is listening to 3000");
});