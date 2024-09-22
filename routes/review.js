const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews");

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(reviewController.deleteReview))

module.exports = router;