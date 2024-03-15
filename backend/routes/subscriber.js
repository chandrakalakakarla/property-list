const mongoose = require("mongoose");


const subscriberScehma = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }

}
)
const collection = new mongoose.model("Collection1", subscriberScehma)
module.exports = collection