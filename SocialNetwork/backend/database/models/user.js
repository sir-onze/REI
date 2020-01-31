const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Schema
const userSchema = new Schema({
	email:{ type: String, unique: false, required: true },
	username: { type: String, unique: false, required: true },
	password: { type: String, unique: false, required: true },
	age: {type: Number, unique: false, required: false},
	position: {type: String, unique: false, required: false},
	CV: {type: String, unique: false, required: false},
	phone: {type: Number, unique: false, required: false},
	photo: {type: String, unique: false, required: false},
	tipe: {type: Number, unique: false, required: false}, // 1 =aluno, 2=docente
	about:{type: String, unique: false, required: false},
	unconfirmed:[String],
	friends:[String]
})

module.exports = mongoose.model('User', userSchema)