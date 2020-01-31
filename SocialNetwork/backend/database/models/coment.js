const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Schema dos posts 
var comentSchema = new mongoose.Schema({
    parentId      : {type: String, unique: false, required: true},
    owner       : {type: String, unique: false, required: false},
    description : {type: String, unique: false, required: false},
    date        : {type: Date, unique: false, required: false},
    likes       : {type: Number, unique: false, required: false},
    file        : {type: [String], unique: false, required: false},
    //hashList    : {type: [String], unique: false, required: false},
    image       : {type: [String], unique: false, required: false}
})

module.exports = mongoose.model('Coment', comentSchema)