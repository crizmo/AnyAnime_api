const express = require('express');
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
require('./database/connection')

app.use(express.json());

app.get("/", (req, res) => {
    const rootPagePath = path.join(__dirname, "root.html");

    // Read the content from the HTML file
    fs.readFile(rootPagePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the welcome page content:", err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.get('/v1/anime/:type/:number?', (req, res) => {
    const { type, number } = req.params;
    const numImages = number ? parseInt(number, 10) : 1; // Default to 1 if number is not provided

    if (type === 'gif' || type === 'png') {
        if (numImages <= 10) {
            const Anime = require("./database/models/anime");
            const mathRandom = (number) => ~~(Math.random() * number);

            const AnyAnime = () => {
                return {
                    anime: () => Anime.find({ type }).then((result) => {
                        const selectedImages = [];
                        for (let i = 0; i < numImages; i++) {
                            const randomIndex = mathRandom(result[0].urls.length);
                            selectedImages.push(result[0].urls[randomIndex]);
                        }
                        return selectedImages;
                    }).catch((err) => {
                        console.log(err);
                    }),
                };
            };

            const selectedImages = AnyAnime().anime();
            selectedImages.then((result) => {
                res.status(200).send({
                    message: `Random Anime ${type.toUpperCase()} Images`,
                    status: '200',
                    images: result,
                });
            }).catch((err) => {
                console.log(err);
            });
        } else {
            res.status(400).send({
                message: 'Number of images requested exceeds the limit (10).',
                status: '400',
            });
        }
    } else {
        res.status(400).send({
            message: 'Invalid type. Type must be "gif" or "png".',
            status: '400',
        });
    }
});

