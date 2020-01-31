const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const postSchema = new Schema({
    title   : {type: String, unique: false, required: false},
    owner   : {type: String, unique: false, required: false},
    content : {type: String, unique: false, required: false },
    date    : {type: Date, unique: false, required: false},
    ownerPhoto   :{type: String, unique:false, required: false},
    classification: {type: String, unique: false, required: false},
    //local: {type: String, unique: false, required: false},
    hashList    : {type: [String], unique: false, required: false},
    file: {type: [String], unique: false, required: false},
    likes: {type: Number, unique: false, required: false},
    image:{type: [String], unique: false, required: false},
    //comments: {type: [String], unique: false, required: false}
})

module.exports = mongoose.model('Post', postSchema)
