const express = require("express");
const products = require("./data/products.json");
const categories = require("./data/categories.json");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// GET all products
app.get("/products", (req, res) => {
  console.log("whatever");

  const { search, brand, max, min, rating } = req.query;

  console.log(search);

  if (!search && !brand && !max && !min && !rating) {
    return res.status(200).send({
      length: products.length,
      products: products.map((product) => {
        const { id, title, price, discountPercentage, thumbnail } = product;
        return {
          id,
          title,
          priceBeforeDiscount: price,
          discountPercentage,
          thumbnail,
        };
      }),
    });
  }

  if (max && isNaN(max)) {
    return res.status(400).send({
      error: "Max query has to be a number",
    });
  }

  if (min && isNaN(min)) {
    return res.status(400).send({
      error: "Min query has to be a number",
    });
  }

  if (rating && isNaN(rating)) {
    return res.status(400).send({
      error: "Rating query has to be a number",
    });
  }

  if (!search || search.length < 3) {
    return res.status(400).send({
      error: "search query has to be longer than 3 characters",
    });
  }

  const productsBySearchWord = products.filter((product) => {
    const isBrand =
      !brand || product.brand.toLowerCase() === brand.toLowerCase();
    const isSearch =
      !search || product.title.toLowerCase().includes(search.toLowerCase());
    const isMax = !max || product.price < parseInt(max);
    const isMin = !min || parseInt(min) < product.price;
    const isRating = !rating || product.rating < parseFloat(rating);

    return isBrand && isSearch && isMax && isMin && isRating;
  });

  if (productsBySearchWord.length === 0) {
    return res.status(404).send({
      error: `No product was find`,
    });
  }

  res.status(200).send({
    length: productsBySearchWord.length,
    products: productsBySearchWord,
  });
});

// GET all categories
app.get("/categories", (req, res) => {
  res.status(200).send({
    categories,
  });
});

// GET category products
app.get("/products/:category", (req, res) => {
  let { category } = req.params;
  category = category.toLowerCase();

  const productsByCategory = products.filter(
    (product) => product.category === category
  );

  res.status(200).send({
    length: productsByCategory.length,
    products: productsByCategory,
  });
});

// GET full data for a product
app.get("/product/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send({
      error: "No product was found",
    });
  }

  res.status(200).send({
    product,
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
