const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// set up routes

app.get("/test", (req, res) => {
  res.send("wow, it actually worked.");
});

app.get("/another-one", (req, res) => {
  res.send("This one works too!");
});

app.get("/", (req, res) => {
    res.send("send all items");
  });
exports.api = functions.https.onRequest(app);

exports.helloThere = functions.https.onRequest((req, res) => {
  res.send("Hello there Firebase Cloud user!");
});

   



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
