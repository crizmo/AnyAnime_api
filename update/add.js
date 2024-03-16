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


// const deleteUrl = async (url) => {
//     // also console log what happens 
//     const imgurl = await Anime.findOne({ type: "png" });
//     const index = imgurl.urls.indexOf(url);
//     if (index > -1) {
//         imgurl.urls.splice(index, 1);
//         await imgurl.save();
//         console.log("Deleted the url from the database");
//     } else {
//         console.log("The url does not exist in the database");
//     }
// }

// const url = "https://res.cloudinary.com/anyanime/image/upload/hunter-%C3%97-hunter-killua-gif-pfp-2Kurizu42.gif"
// deleteUrl(url); // this will delete the url from the database