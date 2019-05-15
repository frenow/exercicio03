const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    id: {
        type: Number
    },    
    author: {
        type: String
    },
    comment: {
        type: String
    },
})



const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
