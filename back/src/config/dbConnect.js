require('dotenv').config()
const mongoose = require("mongoose")


async function dbConnect() {
    const URI = process.env.MONGO_URI
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.log("Error connecting to MongoDB", error

        )
    }
 
}

module.exports = dbConnect