const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = Schema({
    _id: Schema.Types.ObjectId,
    responses_count: Number,
    post_content: { type: String, required: true },
    created_at: {type: Date, required: true}
}, );



module.exports = mongoose.model('Post', postSchema);