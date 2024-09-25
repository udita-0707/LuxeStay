// if(process.env.NODE_ENV !== "production") {
require("dotenv").config();
// }
const  mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MongoStore = require('connect-mongo');
const dbURL = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbURL);
}

main().then(() => {
    console.log("Connected to DB");
    
}).catch(err => {
    console.log(err);
})

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: new mongoose.Types.ObjectId(obj.owner)}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB()