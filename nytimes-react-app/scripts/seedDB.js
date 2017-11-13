const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the News collection and inserts the news below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnytimesnews",
  {
    useMongoClient: true
  }
);

const newsSeed = [
  {
    title: "Dogz Zone",
    snippet: "The dogs had a great birthday party."
  },
];

db.News
  .remove({})
  .then(() => db.News.collection.insertMany(newsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
