const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage})

const listingController = require("../controllers/listings");

router
	.route("/")
	.get(wrapAsync(listingController.index))
	.post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm)

router.route("/:id")
	.get(listingController.showListing)
	.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
	.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));
    
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

module.exports = router;
