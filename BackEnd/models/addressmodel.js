
const { default: mongoose } = require("mongoose")

const AddressSchema = mongoose.Schema({
    "name":{
        type:String
    },
    "address":{
        type:String
    }, 
    "townAndCity":{
        type:String
    },
    "state":{
        type:String
    },
    "pincode":{
        type:Number
    }, 
    "phoneNumber":{
        type:Number
    },
    "email":{
        type:String
    },
})
const address=mongoose.model('address', AddressSchema)
module.exports = address