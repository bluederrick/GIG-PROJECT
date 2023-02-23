const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
if (process.env.NODE_ENV === "TestEnvironment") {

    mongoose.connect("mongodb://localhost:27017/GIG_projects").then(() => {
        console.log("database connection established")
    }).catch((e) => {
        console.log("error", e)


    })
}




module.exports = mongoose;