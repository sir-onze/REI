const mongoose = require('mongoose')
const Schema = mongoose.Schema
var datetime = require('node-datetime')

const eventSchema = new Schema({
    tipe    : {type: String, unique: false, required: false},
    tittle  :{type: String, unique: false, required: false},
    owner   : {type: String, unique: false, required: false},
    date    : {type: Date, unique: false, required: false}, 
    description: {type: String, unique: false, required: false},
    photo: {type: [String], unique: false, required: false},
    UC: {type: String, unique: false, required: false},
    file:{type: [String], unique: false, required: false},
    participation:[String],
})

module.exports = mongoose.model('Event', eventSchema)