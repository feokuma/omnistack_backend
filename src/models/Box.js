const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId }]
}, {
        timestamps: true
    });

module.exports = mongoose.model("File", File)