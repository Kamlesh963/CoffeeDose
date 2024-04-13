
const { default: mongoose } = require("mongoose")

const SignupSchema = mongoose.Schema({
    "name":{
        type:String
    },
    "email":{
        type:String
    }, 
    "password":{
        type:String
    },
})
const signup=mongoose.model('signup', SignupSchema)
module.exports = signup