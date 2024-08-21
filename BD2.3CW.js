//BD2.3 - CW

let express = require("express");
let app = express();

//Question 1: Filter Products by Category(
let products = [
  { name: "Laptop", price: 50000, cagetory: "Electronics" },
  { name: "Mobile", price: 20000, cagetory: "Electronics" },
  { name: "Shirts", price: 1500, cagetory: "Apparel" },
  { name: "Mixer Grinder", price: 4000, cagetory: "Home Appliances" },
];

let filterByCategory = (products, category) => {
  return products.cagetory === category;
};

app.get("/products/category/:cagetory", (req, res) => {
  let category = req.params.cagetory;
  let result = products.filter((product) =>
    filterByCategory(product, category),
  );
  res.json(result);
});

//Question 2: Filter Cars by Mileage
let cars = [
  {
    make: "Maruti",
    model: "Swift",
    mleage: 15000,
  },
  {
    make: "Hundai",
    model: "i20",
    mleage: 25000,
  },
  {
    make: "Tata",
    model: "Nexon",
    mleage: 30000,
  },
];

let filterByMileage = (cars, mleage) => {
  return cars.mleage < mleage;
};

app.get("/cars/mileage/:maxMileage", (req, res) => {
  let mleage = req.params.maxMileage;
  let result = cars.filter((car) => filterByMileage(car, mleage));
  res.json(result);
});

//Question 3: Filter Movies by Rating

let movies = [
  { title: "3 Idots", genre: "Comedy", rating: 9 },
  { title: "Dangal", genre: "Drama", rating: 10 },
  { title: "Bahubali", genre: "Action", rating: 8 },
];

let filterByRating = (movie, minRating) => {
  return movie.rating > minRating;
};

app.get("/movies/rating/:minRating", (req, res) => {
  let minRating = parseInt(req.params.minRating);
  let result = movies.filter((movie) => filterByRating(movie, minRating));

  res.json(result);
});

// Question 4: Filter Orders by Status

let orders = [
  { orderId: 1, customerName: "Rahul", status: "shipped" },
  { orderId: 2, customerName: "Sita", status: "pending" },
  { orderId: 3, customerName: "Amit", status: "shipped" },
];

let filterByStatus = (order, status) => {
  return order.status === status;
};

app.get("/orders/status/:status", (req, res) => {
  let status = req.params.status;
  let result = orders.filter((order) => filterByStatus(order, status));

  res.json(result);
});
//
let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
