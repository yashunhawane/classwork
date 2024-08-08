//BD1.5 - Assignment 2
let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API!");
});

// Endpoint 1: Calculate the Returns of the Stocks added

app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

//Endpoint 2: Calculate the Total Returns

app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalRetuns = stock1 + stock2 + stock3 + stock4;
  res.send(totalRetuns.toString());
});

//Endpoint 3: Calculate the Return Percentage
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  returns;
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

//Endpoint 4: Calculate the Total Return Percentage
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

//Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get("/status", (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);

  let status;
  if (returnPercentage > 0) {
    status = "profit";
  } else {
    status = "loss";
  }

  res.send(status);
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
