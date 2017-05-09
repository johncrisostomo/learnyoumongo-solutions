var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://' + process.env.IP + ':27017/learnyoumongo', function (err, db) {
    if (err) {
        return err;
    }
    
    db.collection('parrots').find({ age: { $gt: Number(process.argv[2]) } }, 
        { _id: 0}).toArray(function (err, docs) {
           if (err) {
               return err;
           } 
           
           console.log(docs);
           db.close();
        });
})