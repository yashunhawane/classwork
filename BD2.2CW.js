//BD2.2 - CW
let express = require("express");
let app = express();

//Question 1: Return Only the Even Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterEvenNumbers = (num) => {
  return num % 2 === 0;
};

app.get("/even-numbers", (req, res) => {
  let evenNumbers = numbers.filter(filterEvenNumbers);
  res.json(evenNumbers);
});

//Question 2: Return Only the Ages Greater Than 18

let personAge = [10, 20, 30, 15, 17, 25];

let filterAges = (age) => {
  return age > 18;
};

app.get("/adult-ages", (req, res) => {
  let adultAge = personAge.filter((age) => filterAges(age));

  res.json(adultAge);
});

//Question 3: Return Only the Words Longer Than 5 Characters

let words = ["apple", "banana", "cherry", "date", "fig", "grape"];

let filterLongWords = (words) => {
  return words.length > 5;
};

app.get("/long-words", (req, res) => {
  let filterWords = words.filter((word) => filterLongWords(word));
  res.json(filterWords);
});

//Question 4: Return Only the Files Smaller Than a Certain Size

let fileSizes = [50, 200, 75, 120, 30, 90, 150];

let filterSmallFiles = (size, files) => {
  return files < size;
};

app.get("/small-files", (req, res) => {
  let size = parseInt(req.query.filterParam);
  let smallFiles = fileSizes.filter((files) => filterSmallFiles(size, files));
  res.json(smallFiles);
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
