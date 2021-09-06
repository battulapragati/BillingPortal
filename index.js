const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const port = 2000
const cors=require("cors");
const ejs = require('ejs');
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));

// Connection URL
const url = 'mongodb+srv://billingportal:billingportal@cluster0.u2dib.mongodb.net/BillingPortal'
const client = new MongoClient(url) // creating a bridge here  between the app and the db server

client.connect().then(data=>{
    console.log("connected to db");
})

// Database Name
const dbName = 'BillingPortal'
const db = client.db(dbName)



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// middleware to pass the db object ---> in the req body;
app.use(function (req, res, next) {
  req.db = db;
  next();
});


const ApiRouter = require("./api");

app.use("/api", ApiRouter)

app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
   })