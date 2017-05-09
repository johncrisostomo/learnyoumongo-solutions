var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/learnyoumongo', function(err, db) {
  if (err) {
    return err;
  } 
   
  var payload = {
    firstName: process.argv[2],
    lastName: process.argv[3],
  };
   
   db.collection('docs').insert(payload, function(err, doc) {
     if (err) {
       return err;
     }
     
     console.log(JSON.stringify(payload));
     db.close();
   });
});