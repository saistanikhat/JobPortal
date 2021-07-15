
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Job = new Schema(
    {
        id: String,
        type: String,
        created_at: String,
        company: String,
        location:String,
        title: String,
        description: String,
        how_to_apply: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('jobs', Job)