const express = require("express");
require("./db/connection");
const MensRanking = require("../src/models/schema");
const router = require("./routers/routing");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(router); // I can also use this line as a app.use('/api', router); but now i can api as (localjost:8000/api/apiname)
//I can create multiple routes like app.use('/api/v1', router);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
