const mongoose = require('mongoose');

const { Schema } = mongoose;

const responseSchema = Schema({
    _id: Schema.Types.ObjectId,
    post_id: { type: Schema.Types.ObjectId, required: true},
    response_content: { type: String, required: true },
    created_at: {type: Date, required: true}
}, );



module.exports = mongoose.model('Response', responseSchema);