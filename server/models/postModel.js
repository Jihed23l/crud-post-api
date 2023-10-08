const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    mongoose.Schema(
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        },
        { timestamps: true }
    )
);

module.exports = PostModel;