const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("AnyAnime Api");
})

app.get('/anime', (req, res) => {
    const anime = require("./database/anime.json");
    const mathRandom = (number) => ~~(Math.random() * number);
    res.status(200).send({
        message: 'Hi User',
        status: 'success',
        data: {
            name: 'Anime img source',
            image: anime[mathRandom(anime.length)]
        }
    });
});

app.get('/anime/img', (req, res) => {
    const anime = require("./database/anime.json");
    const AnyAnime = () => {
        return {
            anime: () => anime[mathRandom(anime.length)],
        };
    };
    const mathRandom = (number) => ~~(Math.random() * number);

    const daimg = AnyAnime().anime();
    const image = `<img src="${daimg}" style="height: auto; width: 10%;">`;
    const reload = `<button onclick="location.reload()">Reload</button>`;
    res.send(image + reload);
})