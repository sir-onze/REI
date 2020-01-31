//Connect to Mongo database
var  mongoose = require('mongoose')
//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/social' 
mongoose.set('useCreateIndex', true);

var mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('Mongo ready: ' + mongoose.connection.readyState))
  .catch((erro)=> console.log('Mongo: erro na conexão: ' + erro))

  /*
mongoose.connect(uri).then(
    () => { 
         ready to use. The `mongoose.connect()` promise resolves to undefined. 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error / 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );
  */


module.exports = mongoose.connection