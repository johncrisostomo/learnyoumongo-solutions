var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/learnyoumongo', function (err, db) {
  if (err) {
    return err;
  }
  
  var match = { $match: { size: process.argv[2] } };
  var group = { $group: { _id: 'average', average: { $avg: '$price' } } };
  
  db.collection('prices').aggregate([
      match,
      group
    ]).toArray(function (err, docs) {
      if (err) {
        return err;
      }
      
      console.log(docs[0].average.toFixed(2));
      db.close();
    });
});