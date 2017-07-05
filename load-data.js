const MongoClient = require('mongodb').MongoClient
  , jsonfile = require('jsonfile')
  , dataFile = './data.json';

let context = jsonfile.readFileSync(dataFile);
let users = context.users;

MongoClient.connect('mongodb://localhost:27017/jlaiv-newdb', (error, db) => {
  const col = db.collection('users');
  for (var i = 0; i < users.length; i++) {
    col.insert(users[i]);
    console.log(users[i]);
  }
  console.log('finished loop');
});

// To list, show dbs
// To use, use jlaiv-newdb
// To delete, db.dropDatabase()
