const Listing = require("./models/listing");
const {listingSchema, reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.path, "..", req.originalUrl);
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
// module.exports.isOwner = async (req, res, next) => {
//     try {
//         let { id } = req.params; // Assuming `id` is the parameter in your route for the listing
//         let listing = await Listing.findById(id);

//         if (!listing) {
//             req.flash("error", "Listing not found");
//             return res.redirect("/listings");
//         }

//         if (!listing.owner_id.equals(res.locals.currentUser._id)) {
//             req.flash("error", "You are not the owner of this listing");
//             return res.redirect(`/listings/${id}`);
//         }

//         next();
//     } catch (error) {
//         console.error(error);
//         req.flash("error", "Something went wrong");
//         res.redirect("/listings");
//     }
// }


module.exports.validateListing = (req, res , next) => {
	let {error} = listingSchema.validate(req.body);
    if(error){ //hrr ek error details see ek message print krenge
        let errMsg = error.details.map((e1) => e1.message).join(",");
        //throw new ExpressError(400, error);
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
	let {error} = reviewSchema.validate(req.body);
    if(error){ //hrr ek error details see ek message print krenge
        let errMsg = error.details.map((e1) => e1.message).join(",");
        //throw new ExpressError(400, error);
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

module.exports.isAuthor = async (req, res, next) => {
    let {reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${review.listing_id}`);
    }
    next();
}