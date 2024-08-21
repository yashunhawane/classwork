let express = require("express");
let app = express();

// Exercise 1: Return the Person Object
let person = {
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  age: 50,
  isMember: true,
};

app.get("/person", (req, res) => {
  res.json(person);
});

// Exercise 2: Access the Full Name of the Person
let getFullName = (person) => {
  return person.firstName + " " + person.lastName;
};

app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});

//Exercise 3: Access Just the First Name and Gender of the Person

let getFirstNameAndGender = (person) => {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
};
app.get("/person/firstname-gender", (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person);
  res.json(firstNameAndGender);
});

//Exercise 4: Increment the Age of the Person and Return the Updated Object

let incrementsAge = (person) => {
  person.age++;
  return person;
};
app.get("/person/increment-age", (req, res) => {
  let updatePerson = incrementsAge(person);
  res.json(updatePerson);
});

//Exercise 5: Return the Full Name and Membership Status of the Person

let getfullNameAndMembership = (person) => {
  return {
    fullName: getFullName(person),
    membership: person.isMember,
  };
};
app.get("/person/fullname-membership", (req, res) => {
  let fullNameAndMembership = getfullNameAndMembership(person);
  res.json(fullNameAndMembership);
});

//Exercise 6: Get Final Price After Discount for Members
let getFinalPrice = (cartTotal, isMember) => {
  let discount = 0.1;
  let finalPrice;
  if (isMember) {
    finalPrice = cartTotal - cartTotal * discount;
  } else {
    finalPrice = cartTotal;
  }
  return {
    finalPrice: finalPrice.toFixed(2),
  };
};

app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);

  let result = getFinalPrice(cartTotal, person.isMemberz);
  res.json(result);
});

//Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status

let getShippingCost = (cartTotal, isMember) => {
  let shippingCost;
  if ((cartTotal > 500) & isMember) {
    shippingCost = 0;
  } else {
    shippingCost = 99;
  }
  return { shippingCost: shippingCost.toFixed(2) };
};

app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shipCost = getShippingCost(cartTotal, person.isMember);
  res.json(shipCost);
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
