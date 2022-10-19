const express = require("express");
const products = require("./data/products.json");

const app = express();

// GET all products
app.get("/products", (req, res) => {
  res.status(200).send({
    length: products.length,
    products,
  });
});

// GET all categories

// GET category products

// GET full data for a product

// GET products by search field

// BONUS

// GET all products by brand

// GET all products by prices

// GET all products by rating

app.listen(4000, () => {
  console.log("server running on port", 4000);
});
