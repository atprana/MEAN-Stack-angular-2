const express = require('express')
const app = express()
const port = 8081;

const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
      if (err) { 
          console.log('Could NOT connect to database', err)
    } else {
           console.log('Connected to database: ' + config.db);
     }
});

mongoose.Promise = global.Promise;


app.get('*', (req,res) => {
    res.send('Home');
})

app.listen(port, function() {
    console.log('App listening on port '+ port);
});

