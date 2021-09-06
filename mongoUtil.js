const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://billingportal:billingportal@cluster0.u2dib.mongodb.net/BillingPortal";

var _db;

module.exports = {

  connectToServer: function( callback) {
    const client = new MongoClient(url) // creating a bridge here  between the app and the db server
    
    client.connect().then(data=>{
        console.log("connected to db");
    })
    
    const dbName = 'BillingPortal'
    _db = client.db(dbName)
    // MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
    //   _db  = client.db('BillingPortal');
    //   return callback( err );
    // } );
  },

  getDb: function() {
    return _db;
  }
};