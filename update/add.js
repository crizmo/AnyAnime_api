require('../database/connection')
const Anime = require("../database/models/anime");
const anime = require("../database/data/urls.json");
anime.forEach(async (anime) => {
    if (anime.endsWith(".png")) {
        const imgurl = await Anime.findOne({ type: "png" });
        imgurl.urls.push(anime);
        await imgurl.save();
    } else if (anime.endsWith(".gif")) {
        const imgurl = await Anime.findOne({ type: "gif" });
        imgurl.urls.push(anime);
        await imgurl.save();
    }
});