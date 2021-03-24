const mongoose = require('mongoose');
const UsersSchema = mongoose.Schema({
    Name : String,
    Email : String,
    Street : String,
    City : String,
    Zipcode : Number,
    tasks : [{title : String, completed : Boolean, body : String}]
});

module.exports = mongoose.model('users',UsersSchema)
