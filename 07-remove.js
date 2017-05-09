var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/' + process.argv[2], function (err, db) {
  if (err) {
    return err;
  }
  
  db.collection(process.argv[3]).remove({ _id: process.argv[4] }, function (err, doc) {
    if (err) {
      return err;
    }
    
    db.close();
  });
});