var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
