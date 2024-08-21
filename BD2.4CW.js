//BD2.4 - CW
let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Yash Unhawane - BD2.4 - CW");
});
//Question 1: Sort Ages in Ascending Order

let ages = [25, 30, 18, 22, 27];
let sortAgesAscending = (age1, age2) => {
  return age1 - age2;
};

app.get("/ages/sort-ascending", (req, res) => {
  let ageCopy = ages.slice();
  ageCopy.sort(sortAgesAscending);

  res.json(ageCopy);
});

//Question 2: Sort Ages in Descending Order

let agesDes = [30, 27, 25, 22, 18];

let sortAgesDescending = (age1, age2) => {
  return age2 - age1;
};
app.get("/ages/sort-descending", (req, res) => {
  let agesDesCopy = agesDes.slice();
  agesDesCopy.sort(sortAgesDescending);
  res.json(agesDesCopy);
});

//Question 3: Sort Students by Marks in Descending Order

let students = [
  { name: "Rahul", rollNo: 101, marks: 85 },
  { name: "Sita", rollNo: 102, marks: 95 },
  { name: "Amit", rollNo: 103, marks: 70 },
];

let sortStudentsByMarksDescending = (marks1, marks2) => {
  return marks2.marks - marks1.marks;
};

app.get("/students/sort-by-marks-descending", (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentsByMarksDescending);
  res.json(studentsCopy);
});

//Question 4: Sort Cars by Mileage in Descending Order

let cars = [
  { make: "Maruti", model: "Swift", milage: 15 },
  { make: "Hyundai", model: "i20", milage: 18 },
  { make: "Tata", model: "Nexon", milage: 20 },
];

let sortCarsByMileageDescending = (car1, car2) => {
  return car2.milage - car1.milage;
};

app.get("/sort-by-mileage-descending", (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsByMileageDescending);
  res.json(carsCopy);
});
//
let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
