//BD 2.5 - Assignment 2

let express = require("express");
let app = express();
let cors = require("cors");

app.use(cors());

let stocks = [
  {
    id: 1,
    name: "reliance industries",
    price: 2500,
    growth: 3.5,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 2,
    name: "hdfc bank",
    price: 1800,
    growth: 4.2,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 3,
    name: "icici bank",
    price: 1600,
    growth: 5.1,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 4,
    name: "tata consultancy services",
    price: 3200,
    growth: 2.9,
    industry: "finance",
    exchange: "bse",
    price: 1900,
  },
  {
    id: 5,
    name: "infosys",
    price: 2900,
    growth: 3.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 7,
    name: "sun pharmaceutical",
    price: 2300,
    growth: 3.2,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 8,
    name: "cipla",
    growth: 2.6,
    price: 2100,
    exchange: "bse",
    industry: "pharma",
  },
  {
    id: 9,
    name: "ntpc",
    price: 1200,
    growth: 4.1,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 10,
    name: "power grid corporation",
    price: 1500,
    growth: 3.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 11,
    name: "adani power",
    price: 2200,
    growth: 5.3,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 12,
    name: "lupin",
    price: 2000,
    growth: 4.5,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 13,
    name: "axis bank",
    price: 1750,
    growth: 2.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 14,
    name: "state bank of india",
    price: 1450,
    growth: 3.6,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 15,
    name: "bajaj finance",
    price: 2650,
    growth: -2.9,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 17,
    name: "biocon",
    price: 1850,
    growth: 3.9,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 18,
    name: "torrent power",
    price: 1600,
    growth: 2.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 19,
    name: "tata power",
    price: 1750,
    growth: 4.0,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 20,
    name: "jsw energy",
    price: 1450,
    growth: 3.1,
    industry: "power",
    exchange: "bse",
  },
];

//Endpoint 1: Get the stocks sorted by pricing

let stockSortedPrice = (stock1, stock2) => {
  return stock1.price - stock2.price;
};

app.get("/stocks/sort/pricing", (req, res) => {
  let pricing = stocks.slice();
  pricing.sort(stockSortedPrice);
  res.json({ stocks: pricing });
});

// Endpoint 2: Get the stocks sorted based on their Growth.

let stockSortedGrowth = (stock1, stock2) => {
  return stock2.growth - stock1.growth;
};

app.get("/stocks/sort/growth", (req, res) => {
  let growth = stocks.slice();
  growth.sort(stockSortedGrowth);
  res.json({ stocks: growth });
});

//Endpoint 3: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)

let stockFilterExchange = (stock, exchange) => {
  return stock.exchange.toLowerCase() === exchange.toLowerCase();
};

app.get("/stocks/filter/exchange", (req, res) => {
  let exchange = "NSE";
  let filterByExchange = stocks.filter((stock) =>
    stockFilterExchange(stock, exchange),
  );
  res.json({ stocks: filterByExchange });
});

//Endpoint 4: Filter the stocks based on the Industrial Sector.
let stockFilterIndustry = (stock, industry) => {
  return stock.industry.toLowerCase() === industry.toLowerCase();
};

app.get("/stocks/filter/industry", (req, res) => {
  let industry = "Power";
  let filterByIndustry = stocks.filter((stock) =>
    stockFilterIndustry(stock, industry),
  );
  res.json({ stocks: filterByIndustry });
});

//Endpoint 5: Send all available stocks

app.get("/", (req, res) => {
  res.json({ stocks: stocks });
});
//
let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
