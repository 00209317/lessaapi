var mongoose = require('mongoose')
var coin = new mongoose.Schema({
    name : String
});

module.exports = mongoose.model("coin",coin);