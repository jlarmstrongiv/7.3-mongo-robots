const express = require('express')
  , path = require('path')
  , mustacheExpress = require('mustache-express')
  , parseurl = require('parseurl')
  , MongoClient = require('mongodb').MongoClient
  , router = require('./routers/router.js')
  , controller = require('./controllers/controller.js');

const app = express();
var context = {};

app.use('/static', express.static(path.join(__dirname, 'static')));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('layout', 'layout');

// Mongo Middleware
app.use(function(req, res, next){
  MongoClient.connect('mongodb://localhost:27017/jlaiv-newdb', (error, db) => {
    console.log(error);
    req.db = db;
    next();
  });
});

router(app);

app.listen(3000, function () {
  console.log('Express is listening for connections');
});
