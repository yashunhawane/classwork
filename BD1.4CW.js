//BD1.4 - CW

let express = require("express");
let app = express();

//Question 1:

// Create an endpoint that returns a welcome message.
function getWelcomeMessage() {
  return "Welcome to the services!";
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

// Question 2:

// Create an endpoint that takes a username as a query parameter and returns a greeting message.
let getGreeeting = (name) => {
  return `Hello, ${name}!`;
};
app.get("/greet", (req, res) => {
  let userName = req.query.username;
  res.send(getGreeeting(userName));
});

// Question 3:

// Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.

let passwordStrenght = (password) => {
  let passwordLength = password.length;
  let result;
  if (passwordLength >= 15) {
    result = "Password is Strong";
  } else {
    result = "Password is Weak";
  }
  return result;
};
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(passwordStrenght(password));
});

//Question 4:

//Create an endpoint that takes two numbers as query parameters and returns their sum.

let addNumbers = (num1, num2) => {
  let result = num1 + num2;
  return result.toString();
};
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(addNumbers(num1, num2));
});

// Question 5:

// Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.

let getSubscriptionStatus = (userName, isSubscribed) => {
  let result;
  if (isSubscribed === "true") {
    result = `${userName} is subscribed`;
  } else {
    result = `${userName} is not subscribed.`;
  }
  return result;
};

app.get("/subscription-status", (req, res) => {
  let userName = req.query.username;
  let isSubscribed = req.query.isSubscribed;

  res.send(getSubscriptionStatus(userName, isSubscribed));
});

// Question 6:

// Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.

let getFinalPrice = (productPrice, discountPercentage) => {
  return productPrice - (productPrice * discountPercentage) / 100;
};

app.get("/discounted-price", (req, res) => {
  let productPrice = parseFloat(req.query.price);
  let discountPercentage = parseFloat(req.query.discount);
  res.send(getFinalPrice(productPrice, discountPercentage).toString());
});

// Question 7:

// Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.

let getPersonalizedGreeting = (age, gender, name) => {
  return `Hello, ${name}! You are ${age} years old and ${gender}.`;
};
app.get("/personalized-greeting", (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

// Question 8:

// Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.

let getFinalPriceWithTax = (productPrice, discountPercentage, taxRate) => {
  let finalPrice = productPrice - (productPrice * discountPercentage) / 100;
  return finalPrice + (finalPrice * taxRate) / 100;
};
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPriceWithTax(price, discount, tax).toString());
});

// Question 9:

// Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.

let getTotalExerciseTime = (running, cycling, swimming) => {
  return running + cycling + swimming;
};
app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
