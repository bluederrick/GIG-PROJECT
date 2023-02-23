const mongoose = require('mongoose');
let Schema = new mongoose.Schema({
    // Name: {
    //     type: 'string',
    //     required: true

    //     ,
    Email: {
        type: 'string',
        required: true,
        Unique: true

    },

    Password: {
        type: 'string',
        required: true,
        minlength: '5',
        maxlength: '10'
    }
})
const userModel = mongoose.model("User", Schema);

module.exports = userModel;


