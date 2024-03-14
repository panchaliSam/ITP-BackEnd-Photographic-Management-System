const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Photo = mongoose.model('eventphotosalbums', photoSchema);

module.exports = Photo;
