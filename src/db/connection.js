const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ganpat:ganpat@cluster0.yleqvvq.mongodb.net/NodeApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.log("No connection " + e.message);
  });
