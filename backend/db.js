const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.vzk9auz.mongodb.net/<database name>?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;

        const foodItems = await db.collection("food_items").find({}).toArray();
        const foodCategory = await db.collection("foodCategory").find({}).toArray();

        global.food_items = foodItems;
        global.foodCategory = foodCategory;

    } catch (err) {
        console.error("--- DB Connection Error ---", err);
    }
};

module.exports = mongoDB;
