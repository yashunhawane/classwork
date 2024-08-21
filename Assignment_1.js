//BD 2.5 - Assignment 1

let express = require("express");
let app = express();

let cors = require("cors");

app.use(cors());

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

//Endpoint 1: Get the products sorted by popularity

let sortedProductsByPopularity = (product1, product2) => {
  return product2.rating - product1.rating;
};

app.get("/products/sort/popularity", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortedProductsByPopularity);
  res.json({ products: sortedProducts });
});

//Endpoint 2: Get the products sorted by “high-to-low” price
let sortedProductsByPrice = (product1, product2) => {
  return product2.price - product1.price;
};

app.get("/products/sort/price-high-to-low", (req, res) => {
  let sortedProductsPrice = products.slice();
  sortedProductsPrice.sort(sortedProductsByPrice);
  res.json({ products: sortedProductsPrice });
});

//Endpoint 3: Get the products sorted by “low-to-high” price
let sortedProductsPrice = (product1, product2) => {
  return product1.price - product2.price;
};

app.get("/products/sort/price-low-to-high", (req, res) => {
  let sortedProductPrice = products.slice();
  sortedProductPrice.sort(sortedProductsPrice);
  res.json({ products: sortedProductPrice });
});

//Endpoint 4: Filter the products based on the “RAM” option.

let productsfilterByRam = (product, ram) => {
  return product.ram === ram;
};

app.get("/products/filter/ram", (req, res) => {
  let ram = parseInt(req.query.ram);
  let filterByRam = products.filter((product) =>
    productsfilterByRam(product, ram),
  );
  res.json({ products: filterByRam });
});

//Endpoint 5: Filter the products based on the “ROM” option.
let productsfilterByRom = (product, rom) => {
  return product.rom === rom;
};

app.get("/products/filter/rom", (req, res) => {
  let rom = parseInt(req.query.rom);
  let filterByRom = products.filter((product) =>
    productsfilterByRom(product, rom),
  );
  res.json({ products: filterByRom });
});

//Endpoint 6: Filter the products based on the “Brand” option.

let productsfilterByBrand = (product, brand) => {
  return product.brand.toLowerCase() === brand.toLowerCase();
};

app.get("/products/filter/brand", (req, res) => {
  let brand = req.query.brand;
  let filterByBrand = products.filter((product) =>
    productsfilterByBrand(product, brand),
  );
  res.json({ products: filterByBrand });
});

//Endpoint 7: Filter the products based on the “OS” option.

let productsfilterByOs = (product, os) => {
  return product.os.toLowerCase() === os.toLowerCase();
};
app.get("/products/filter/os", (req, res) => {
  let os = req.query.os;
  let filterByOs = products.filter((product) =>
    productsfilterByOs(product, os),
  );
  res.json({ products: filterByOs });
});

//Endpoint 8: Filter the products based on the “Price” option.

let productsfilterByPrice = (product, price) => {
  return product.price <= 30000;
};

app.get("/products/filter/price", (req, res) => {
  let price = parseInt(req.query.price);
  let filterByPrice = products.filter((product) =>
    productsfilterByPrice(product, price),
  );
  res.json({ products: filterByPrice });
});

//Endpoint 8: Send original array of products
app.get("/products", (req, res) => {
  res.json({ products: products });
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
