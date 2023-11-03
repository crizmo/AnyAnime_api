<p align="center">
  <a href="https://www.npmjs.com/package/anyanime">
    <img src="https://media.discordapp.net/attachments/953273278770860082/954403125584871454/anyanimeapi.png?width=1279&height=196" alt="Any Anime Api">
  </a>
</p>

# Any Anime Api

AnyAnime api is a addon on the original anyanime npm package which works similar to the package

The api & package is made by `kurizu.taz` on discord !

Get a random anime pfp / image per request.

- Reload the site or click the button to get a new image.
- Current db size : 770 png | 185 gifs

Anyanime API is a free API that allows you to get a random anime images for your projects.

# Contributing
If you want to contribute to the api you can do so by making a pull request or by making an issue.

To add more images to the api you can do so by adding them to the `database/data/url.json` folder.

- Example :- 
```json
[
  "https://cdn.discordapp.com/attachments/970974282681307187/988501172887363604/favicon.png",
  "https://media.discordapp.net/attachments/952764969638834228/969830435444097054/Criz.png",
]
```
Then you can make a pull request and i'll add them to the api.
Try to keep the url type as `png` or `gif`. ( Better if the images are hosted on discord )

# Package

If you want to use the package instead of the api here's the link:

- [AnyAnime](https://www.npmjs.com/package/anyanime/)
- [Github](https://github.com/crizmo/AnyAnime)

# Discord implementation

```javascript
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

let ani = await fetch(`https://any-anime.p.rapidapi.com/v1/anime/gif/2/?rapidapi-key={YOUR_API_KEY}`);
let data = await ani.json();


// {
//   message: 'Random Anime GIF Images',
//   status: '200',
//   images: [
//     'https://res.cloudinary.com/anyanime/image/upload/hatsune-miku-animeKurizu16.gif',
//     'https://res.cloudinary.com/anyanime/image/upload/anime-girl-animeKurizu0.gif'
//   ]
// }

const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`AnyAnime`)
  .setDescription(`${data.message} \n Status: ${data.status}`)
  .setImage(data.images[0])
  .setFooter(`Hope you like it!`);
message.channel.send({ embeds: [embed] });

```

# Base endpoints Heroku

- Json response ( Get ) - https://any-anime.p.rapidapi.com/v1/anime/png/1/?rapidapi-key={YOUR_API_KEY} - Shows json data and image.

## Params and query

"/v1/anime/:type/:number"

- "v1" - Version of the api
- "anime" - Type [ default]
- ":type" - Type of image [ png | gif ]
- ":number" - Number of images [ 1 - 10 ] [ default 1 ]

## Response

- Gives a json response with the image url and status code.
```json
{
  message: 'Random Anime GIF Images',
  status: '200',
  images: [
    'https://res.cloudinary.com/anyanime/image/upload/hatsune-miku-animeKurizu16.gif',
    'https://res.cloudinary.com/anyanime/image/upload/anime-girl-animeKurizu0.gif'
  ]
}
```
for - https://any-anime.p.rapidapi.com/v1/anime/gif/2/?rapidapi-key={YOUR_API_KEY}