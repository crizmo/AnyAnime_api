const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    urls: {
        type: Array,
    },
    type: {
        type: String,
    },
});

const Anime = mongoose.model('anime', animeSchema);

module.exports = Anime;