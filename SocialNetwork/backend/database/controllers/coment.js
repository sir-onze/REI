var Coment = require('../models/coment')

module.exports.addComent = (coment) =>{
    return Coment.create(coment)
}

module.exports.getByParent = (parentId) =>{
    console.log(parentId)
    return Coment
        .find({parentId: parentId})
        .sort({date: -1})
        .exec()
}

module.exports.update = (id, description, likes, hashList) =>{
    return Coment
        .updateOne({_id: id},{$set: {description: description, likes: likes, hashList: hashList}})
}

module.exports.deleteById = (id) =>{
    return Coment
        .findOneAndDelete({_id: id})
        .exec()
}

module.exports.deleteByParent = (parentId) =>{
    return Coment
        .deleteMany({parentId: parentId})
}