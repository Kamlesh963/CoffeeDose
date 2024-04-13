
const { default: mongoose } = require("mongoose")

const CartSchema = mongoose.Schema({
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
const cart=mongoose.model('Cart', CartSchema)
module.exports = cart