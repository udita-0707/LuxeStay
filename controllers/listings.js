const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken: mapToken});

module.exports.index = async(req, res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs", {allListings});
}

module.exports.renderNewForm = (req, res) => {
	if(!req.isAuthenticated()){
		req.flash("error", "You must be logged in to create a listing");
		return res.redirect("/login");
	}
    res.render("listings/new.ejs");
}

module.exports.showListing = async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
		.populate({path: "reviews", populate: {path: "author", select: "username"}})
		.populate("owner");
    if(!listing){
		req.flash("error", "Listing not found");
		res.redirect("/listings");
	}
	res.render("listings/show.ejs", {listing});
}

module.exports.createListing = async(req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
        .send();

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
	newListing.owner = req.user._id;
    newListing.image = {url, filename};
    
    newListing.geometry = response.body.features[0].geometry;
    
    await newListing.save();
	req.flash("success", "New listing created!");
    res.redirect("/listings");

    next();

}

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
		req.flash("error", "Listing not found");
		res.redirect("/listings");
	}
    let originalImageUrl = listing.image.url;
	originalImageUrl = originalImageUrl.replace("upload", "upload/h_200,w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
}

module.exports.updateListing = async(req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
	req.flash("success", "Listing deleted");
    res.redirect("/listings");
  }