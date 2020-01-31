var Event = require('../models/events')

module.exports.list = () => {
    return Event
        .find()
        .exec()
}

module.exports.addEvent = (event) =>{
    return Event
        .create(event)
}

module.exports.consult = (id) => {
    return Event
        .findOne({_id:id})
        .exec()
}
module.exports.delete = (id) => {
    return Event
.findOneAndDelete({_id: id})
.exec()
}

module.exports.delete_participation = (id,user) => {
    return Event
    .findOneAndUpdate({_id:id},{$pull:{participation:user}})
    .exec()

}


module.exports.get_events = (username) => {
    return Event
        .find({owner:username})
        .exec()
}

module.exports.get_participation = (username) => {
    return Event
        .find({participation:username})
        .exec()
}

module.exports.update_participation = (id,user) => {
    return Event
           .updateOne({_id:id},{$push:{participation: user}})
           .exec()
}