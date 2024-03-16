const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://pinscrape.onrender.com/api/kurizutaz/anime/pins';

axios.get(url)
    .then(response => {
        const srcValues = response.data.images.map(image => image.src);
        const filePath = path.join(__dirname, './database/data/urls.json');
        fs.writeFileSync(filePath, JSON.stringify(srcValues, null, 2));
    })
    .catch(error => console.error('Error:', error));