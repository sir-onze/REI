const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    tipe    : {type: String, unique: false, required: false},
    tittle    : {type: String, unique: false, required: false},
    owner   : {type: String, unique: false, required: false},
    date    : {type: Date, unique: false, required: false}, 
    description: {type: String, unique: false, required: false},
    photos: {type: [String], unique: false, required: false},
    likes: {type : Number, unique: false, required: false},
})

module.exports = mongoose.model('Album', albumSchema)