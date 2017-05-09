var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/learnyoumongo', function(err, db) {
  if (err) {
    return err;
  }
  
  db.collection('parrots').count({ age: { $gt: Number(process.argv[2]) } }, 
    function (err, count) {
      if (err) {
        return err;
      }
      
      console.log(count);
      db.close();
    });
});