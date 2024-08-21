let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

//Endpoint 1: Calculate the total price of items in the cart

app.get("/cart-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseInt(req.query.cartTotal);
  let total = newItemPrice + cartTotal;
  res.send(total.toString());
});

//Endpoint 2 : Apply a discount based on membership status

app.get("/membership-discount", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  let discount;
  if (isMember === "true") {
    discount = (cartTotal * discountPercentage) / 100;
  } else {
    discount = 0;
  }
  let finalPrice = cartTotal - discount;
  res.send(finalPrice.toString());
});

//Endpoint 3 : Calculate tax on the cart total

app.get("/calculate-tax", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let tax = (cartTotal * taxRate) / 100;
  res.send(tax.toString());
});

//Endpoint 4 : Estimate delivery time based on shipping method
app.get("/estimate-delivery", (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let deliveryTime;
  if (shippingMethod === "standard") {
    deliveryTime = parseInt(distance / 50);
  } else {
    deliveryTime = parseInt(distance / 100);
  }
  res.send(deliveryTime.toString());
});

//Endpoint 5 : Calculate the shipping cost based on weight and distance
app.get("/shipping-cost", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;
  res.send(shippingCost.toString());
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
