const  mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/quest");
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