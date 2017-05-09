var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/' + process.argv[2], function (err, db) {
  if (err) {
    return err;
  } 
  db.collection('users').update({ username: 'tinatime' }, {
    $set: {
      age: 40,
    },
  }, function (err, doc) {
    if (err) {
      return err;
    }
    
    db.close();
  }); 
});