
const { default: mongoose } = require("mongoose")

const MyorderSchema = mongoose.Schema({
    "items": [{
        "MainPrice": {
            type: String
        },
        "Quantity": {
            type: String
        },
        "Name": {
            type: String
        },
        "img": {
            type: String
        },
    }],
    "username": {
        type: String
    },
    "address": {
        type: String
    },
    "townAndCity": {
        type: String
    },
    "state": {
        type: String
    },
    "pincode": {
        type: Number
    },
    "phoneNumber": {
        type: Number
    },
    "grandTotal": {
        type: Number
    },
    "dateAndTime": {
        type: String
    },
})
const myorder = mongoose.model('Myorder', MyorderSchema)
module.exports = myorder