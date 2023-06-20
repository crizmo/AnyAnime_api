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
- Current db size : 600

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

let Anyanime = [];
let ani = await fetch(`https://any-anime.p.rapidapi.com/anime/?rapidapi-key={YOUR_API_KEY}`);
let data = await ani.json();

Anyanime.push({
  message: data.message.toLocaleString(),
  status: data.status.toLocaleString(),

  // image

  name: data.stuff[0].name.toLocaleString(),
  daimg: data.stuff[0].image.toLocaleString(),
});

const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${Anyanime[0].name}`)
  .setDescription(`${Anyanime[0].message} \n ${Anyanime[0].status}`);
  .setImage(Anyanime[0].daimg)
  .setFooter(`Hope you like it!`);
message.channel.send({ embeds: [embed] });

```

# Endpoints using rapid

- Data & img ( GET ) - https://any-anime.p.rapidapi.com/anime/?rapidapi-key={YOUR_API_KEY} - Shows json data and image.
- Just img ( GET ) - https://anyanime-api.kurizu.repl.co/anime/img/?rapidapi-key={YOUR_API_KEY} - Just shows a random image from the database.

# Base endpoints Heroku

- Base ( GET ) - https://anyanime-api.kurizu.repl.co/ - The base endpoint
- Data & img ( GET ) - https://anyanime-api.kurizu.repl.co/anime - Shows json data and image.
- Just img ( GET ) - https://anyanime-api.kurizu.repl.co/anime/img - Just shows a random image from the database.

# Base endpoints Replit

- Base ( GET ) - https://anyanime-api.kurizu.repl.co/ - The base endpoint
- Data & img ( GET ) - https://anyanime-api.kurizu.repl.co/anime - Shows json data and image.
- Just img ( GET ) - https://anyanime-api.kurizu.repl.co/anime/img - Just shows a random image from the database.