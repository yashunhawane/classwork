const e = require("express");
let express = require("express");
let app = express();

app.get("/name", (req, res) => {
  let upperCase = req.query.name.toLocaleUpperCase();

  res.send(upperCase);
});

app.get("/fullname", (req, res) => {
  let first = req.query.firstname;
  let last = req.query.lastname;
  let fullname = first + " " + last;
  res.send(fullname);
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;

  let fulldate = `${month}, ${year}`;
  res.send(fulldate);
});

app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greet = `Namaste, ${name}!`;
  res.send(greet);
});

app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let sate = req.query.state;
  let address = `${street}, ${city}, ${sate}`;
  res.send(address);
});

app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = `${username}@${domain}.com`;
  res.send(email);
});

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
