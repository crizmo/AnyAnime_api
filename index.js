const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('./database/connection')

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hi ! Welcome to AnyAnime Api , Please using the following endpoints :- <br>To get json data - <a href="https://anyanime-api.kurizu.repl.co/anime">/anime</a> <br>To get random anime img / pfp - <a href="https://anyanime-api.kurizu.repl.co/anime/img">/anime/img</a>`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.get('/anime', (req, res) => {
    const mathRandom = (number) => ~~(Math.random() * number);

    const Anime = require("./database/models/anime");
    Anime.find({ type: "png" }).then((result) => {
        console.log(result[0].urls.length);
        res.status(200).send({
            message: 'Hi User',
            status: 'success',
            stuff: [{
                name: 'Anime img source',
                image: result[0].urls[mathRandom(result[0].urls.length)]
            }]
        });
    }).catch((err) => {
        console.log(err);
    });

});

app.get('/anime/img', (req, res) => {
    const Anime = require("./database/models/anime");
    const mathRandom = (number) => ~~(Math.random() * number);

    const AnyAnime = () => {    
        return {
            anime: () => Anime.find({ type: "png" }).then((result) => {
                console.log(result[0].urls[mathRandom(result[0].urls.length)])
                return result[0].urls[mathRandom(result[0].urls.length)];
            }).catch((err) => {
                console.log(err);
            }),
        };
    };  

    const daimg = AnyAnime().anime();
    daimg.then((result) => {
        const image = `<img src="${result}" style="height: auto; width: 10%;">`;
        const reload = `<button onclick="location.reload()">Reload</button>`;
        res.send(image + reload);
    }
    ).catch((err) => {
        console.log(err);
    });
})