const cloudinary = require('cloudinary').v2;
const anime = require("../database/data/urls.json");
// Configuration 
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./database/data/urls.json", "utf-8"));
require('dotenv').config();
 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME.replace(/"/g, ""),
  api_key: process.env.API_KEY.replace(/"/g, ""),
  api_secret: process.env.API_SECRET.replace(/"/g, ""),
});

// GIFS
// const gifs = JSON.parse(fs.readFileSync("./database/data/test.json", "utf-8"));
// gifs.forEach((gif) => {
//   const name = gif.split("/").pop().split(".")[0] + "Kurizu" + data.length ;
//   console.log(name);
//   const res = cloudinary.uploader.upload(`${gif}`, {public_id: `${name}`, tags: `anime`});
//   res.then((data) => {
//     console.log(data.secure_url);
//   }).catch((err) => {
//     console.log(err);
//   });
//   const url = cloudinary.url(`${name}`, {
//     secure: true,
//   });
//   console.log(url);
//   const real = url + ".gif";
//   data.push(real);
//   fs.writeFileSync("./database/data/urls.json", JSON.stringify(data, null, 2));
//   console.log(data.length);
// });


// JPGS
const jpgs = JSON.parse(fs.readFileSync("./database/data/urls.json", "utf-8"));
jpgs.forEach((jpg) => {
  const name = jpg.split("/").pop().split(".")[0] + "Kurizu" + data.length ;
  console.log(name);
  const res = cloudinary.uploader.upload(`${jpg}`, {public_id: `${name}`, tags: `anime`});
  res.then((data) => {
    console.log(data.secure_url);
  }).catch((err) => {
    console.log(err);
  });
  const url = cloudinary.url(`${name}`, {
    secure: true,
  });
  console.log(url);
  const real = url + ".png";
  data.push(real);
  fs.writeFileSync("./database/data/urls.json", JSON.stringify(data, null, 2));
  console.log(data.length);
});