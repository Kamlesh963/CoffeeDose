
const { default: mongoose } = require("mongoose")

const ProductSchema = mongoose.Schema({
    "Coffeeid":{
        type:String
    },
    "XPrice":{
        type:String
    }, 
    "MainPrice":{
        type:String
    },
    "Quantity":{
        type:String
    },
    "Name":{
        type:String
    }, 
    "Calories":{
        type:String
    },
    "img":{
        type:String
    },
})
const product=mongoose.model('product', ProductSchema)
module.exports = product