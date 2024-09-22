const mongoose = require("mongoose");
const User = require("./user"); // Assuming this is your model path

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect("mongodb://localhost:27017/quest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");

    // Insert the hardcoded users into the database
    User.insertMany(users)
        .then(() => {
            console.log("Users added successfully");
            mongoose.connection.close();
        })
        .catch((err) => {
            console.error("Error adding users:", err);
        });

}).catch((err) => {
    console.error("Connection error:", err);
});
