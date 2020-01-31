var Post = require('../models/post')

module.exports.consult = (id) => {
    return Post
        .findOne({_id:id})
        .exec()
}

module.exports.allPosts = () => {
    return Post
        .find()
        .sort({date:-1})
        .exec()
}

module.exports.postsByUser = username => {
    return Post 
        .find({owner: username})
        .exec()
}

module.exports.postsByHashtag = hashtag => {
    return Post
        .find({hashList: hashtag})
        .exec()
}

module.exports.addComent = (id, coment) => {
    return Post
        .updateOne({_id: id}, {$push: {coments: coment}})
}

module.exports.updateLikes = (id) => {
    return Post
        .updateOne({_id: id}, {$inc: {likes: +1}})
}

module.exports.addPost = post => {
    return Post.create(post)
}

module.exports.updatePost = (id, title, content, hashtag) => {
    return Post
        .updateOne({_id: id}, {$set: {title: title, content: content, hashList: hashtag}})
}

module.exports.deletePost = id => {
    return Post 
        .findOneAndDelete({_id: id})
        .exec()
}