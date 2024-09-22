const User = require("../models/user");

module.exports.renderSignUpForm = (req, res) => {
    // res.send("form");
    res.render("users/login")
}

module.exports.signUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newuser = new User({ username, email, password });
        let registeredUser = await User.register(newuser, password);
        // console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Quest!");
            res.redirect("/listings");
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.logIn = async (req, res) => {
    req.flash("success", "User Logged in Successfully");
    res.redirect(res.locals.redirectUrl || "/listings");
}

module.exports.logOut = (req, res, next) => {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
    });
    req.flash("success", "Goodbye!");
    res.redirect("/listings");
}