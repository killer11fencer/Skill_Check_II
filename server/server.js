
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db',dbInstance);
    app.listen(SERVER_PORT, () => console.log('Listing on port',SERVER_PORT))
}).catch(err=>console.log('error on massive',err))





