const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB_URL}`, ()=> {
  console.log('connected to mongodb')
})
