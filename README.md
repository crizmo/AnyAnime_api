<p align="center">
  <a href="https://www.npmjs.com/package/anyanime">
    <img src="https://media.discordapp.net/attachments/953273278770860082/954403125584871454/anyanimeapi.png?width=1279&height=196" alt="Any Anime Api">
  </a>
</p>

# Any Anime Api

AnyAnime api is a addon on the original anyanime npm package which works similar to the package

The api & package is made by `Criz#1270` !

Get a random anime pfp / image per request.

- Reload the site or click the button to get a new image.
- Current db size : 400

# Package

If you want to use the package instead of the api here's the link:

- [AnyAnime](https://www.npmjs.com/package/anyanime/)
- [Github](https://github.com/crizmo/AnyAnime)

# Discord implementation

```javascript
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

let Anyanime = [];
let ani = await fetch(`https://anyanime-api.herokuapp.com/anime`);
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

# Endpoints

- Base ( GET ) - https://anyanime-api.herokuapp.com/ - The base endpoint
- Data & img ( GET ) - https://anyanime-api.herokuapp.com/anime - Shows json data and image.
- Just img ( GET ) - https://anyanime-api.herokuapp.com/anime/img - Just shows a random image from the database.
