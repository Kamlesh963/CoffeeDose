const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/coffeedose?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1'
const config=()=>{

    mongoose.connect(url)
        .then(() => console.log('Database Cunnected Succesfully'))
        .catch((err) => console.log(err))
}

module.exports= config