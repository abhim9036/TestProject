const mongoose  = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    Category:String
});

module.exports = mongoose.model("newcollect2", productSchema);