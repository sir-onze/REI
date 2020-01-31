var User = require('../models/user')

module.exports.update_unconfirmed = (user,useri) => {
    return User
           .findOneAndUpdate({username:user},{$push:{unconfirmed:useri}})
           .exec()
}

module.exports.update_confirmed = (user1,user2) => {
    return User
           .findOneAndUpdate({username:user1},{$push:{friends:user2}})
           .exec()
}

module.exports.remove_unconfirmed = (user1,user2) => {
    return User
           .findOneAndUpdate({username:user1},{$pull:{unconfirmed:user2}})
           .exec()
}


module.exports.consult_friends = (username) => {
    return User
        .find({friends:username})
        .exec()
}

module.exports.userByName = (username) =>{
    return User
        .findOne({username: username})
        .exec()
}

module.exports.consult_friends_requests = (username) => {
    return User
        .find({unconfirmed:username})
        .exec()
}

/** Devolve todos os utilizadores que não são amigos do user loggado */
module.exports.consult_all = (username) => {
    return User
        .find({friends:{$ne: username},username:{$ne: username},unconfirmed:{$ne: username}})
        .exec()
}

module.exports.consult = (email) => {
    return User
        .findOne({email:email})
        .exec()
}

module.exports.update_photo = (mail,photo_in) => {
    return User
           .updateOne({email:mail},{"photo":photo_in})
           .exec()
}

module.exports.update_email = (mail,mail_in) => {
    return User
           .updateOne({email:mail},{"email":mail_in})
           .exec()
}

module.exports.update_password = (mail,password) => {
    return User
           .updateOne({email:mail},{"password":password})
           .exec()
}

module.exports.update_username = (mail,username) => {
    return User
           .updateOne({email:mail},{"username":username})
           .exec()
}

module.exports.update_age = (mail,age) => {
    return User
           .updateOne({email:mail},{"age":age})
           .exec()
}

module.exports.update_position = (mail,position) => {
    return User
           .updateOne({email:mail},{"position":position})
           .exec()
}

module.exports.update_about = (mail,about) => {
    return User
           .updateOne({email:mail},{"about":about})
           .exec()
}

module.exports.update_infos = (mail,new_mail,password,username,age,position) => {
    return User
           .updateOne({email:mail},{"age":age,"email":new_mail,"password":password,"username":username,"position":position})
           .exec()
}


