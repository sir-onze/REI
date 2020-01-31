var Album = require('../models/album')

module.exports.list = () => {
    return Album
        .find()
        .sort({date: -1})
        .exec()
}

module.exports.create = (album) =>{
    return Album
        .create(album)
}

module.exports.consult = (id) => {
    return Album
        .findOne({_id:id})
        .exec()
}

module.exports.getByOwner = (owner) => {
    return Album
        .find({owner:owner})
        .exec()
}

module.exports.delete = (id) =>{
    return Album
        .findOneAndDelete({_id: id})
        .exec()
}

module.exports.getByType = (type) =>{
    return Album
        .find({tipe: type})
        .sort({date: -1})
        .exec()
}