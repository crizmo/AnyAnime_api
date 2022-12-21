// require('./database/connection')
const anime = require("../database/anime.json");
const Anime = require("../database/models/anime");
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