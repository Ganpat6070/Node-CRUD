const express = require('express');
require('./db/connection');
const MensRanking = require('../src/models/schema');
const router = require('./routers/routing');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log('Server listening on port ' + port);
})