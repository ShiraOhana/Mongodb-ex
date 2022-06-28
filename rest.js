"use findMyRestaurant "`db.rest.insertMany([
    { name: "Papa Jones",
city: "Tel Aviv", street: "Hatayasim 4", coordinates: [153, 4550], cuisine:
"Italian", kosher: false, reviews: [ { date: "10.25.22", score: "2.5", }, {
date: "18.5.16", score: "5", }, { date: "1.2.42", score: "4", }, ], }, { name:
"416", city: "Tel-Aviv", street: "Ha-Arbaa", coordinates: [153, 4550], cuisine:
"Vegan", kosher: true, reviews: [ { date: "13.5.23", score: "4", }, { date:
"13.2.62", score: "5", }, { date: "1.5.22", score: "2.5", }, ], }, { name: "Abu-
Shaker", city: "Haifa", street: "Down town", coordinates: [153, 4550], cuisine:
"Hummus", kosher: false, reviews: [ { date: "1.5.72", score: "4", }, { date:
"10.25.22", score: "4.5", }, { date: "1.25.21", score: "5", }, ], }, { name:
"Brussel coffee", city: "Haifa", street: "Moria 12", coordinates: [153, 4550],
cuisine: "Italian", kosher: false, reviews: [ { date: "5.4.5", score: "5", }, {
date: "3.4.93", score: "5", }, { date: "15.9.22", score: "4", }, ], }, { name:
"Moon sushi", city: "Tel Aviv", street: "Yermiyahu", coordinates: [153, 4550],
        date: "1.5.20",
        cuisine: "Vegan", kosher: false, reviews: [ { date: "1.5.28", score: "5", }, {
date: "1.5.20", score: "2", }, { date: "1.4.12", score: "3", }, ], }, ]; )`;

db.rest.find().pretty();
db.rest.find({ cuisine: "Vegan" }).pretty();
db.rest.find({ kosher: true }).pretty();
db.rest.find({ city: "Tel Aviv" }).pretty();
db.rest.find({ street: "Moria 12" }).pretty();
db.rest.find({ coordinates: [153, 4550] }).pretty();
db.rest.updateOne({ name: "416" }, { $set: { name: "Anastasia" } });
db.rest.updateOne({ kosher: false }, { $set: { kosher: true } });
db.rest.find().forEach((s) => printjson(`the restaurant's name is ${s.name}`));
db.rest.find().forEach((s) => printjson(`the restaurant's city is ${s.city}`));
db.rest
  .find()
  .forEach((s) =>
    printjson(`the restaurant's coordinates are ${s.coordinates}`)
  );
