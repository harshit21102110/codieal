const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/codieal_development');
const db =mongoose.connection;

db.on('error',console.error.bind(console,"error in connnectong to database"));
db.once('open',function(){
console.log("connected to database : MongoDB")
});

module.exports=db;