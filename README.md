# React Fetch Data Challenge

In this challenge we will build an E-commerce web applicaiton.

There is a list of todo's, but feel free to keep and improving this up beyond that.

## Design

<img width="1328" alt="design" src="https://user-images.githubusercontent.com/31222514/197737082-54e16c5c-7caf-493d-9aae-8f5d1394641f.png">

## Goal

Basically, we need to add data fetching, so we can present the data received from the server.

To start the application:

First run the server. To do that, open a new terminal in the project and run

```bash
$ npm run server
```

This teminal should not be closed. Closing this terminal will abort the server, and you will not be able to fetch the data.

Then, open a new terminal to start the web server (React), by running:

```bash
$ npm start
```

Don't close this terminal either (this will shutdown React).

If you want to use git to push to your GitHub repository, open a new terminal :)

## API routes

```bash
# GET ALL PRODUCTS
http://localhost:4000/products

# GET ALL DETAILS ON A SPECIFIC PRODUCT
http://localhost:4000/product/:id

# for example
http://localhost:4000/product/32
http://localhost:4000/product/12

# GET ALL CATEGORIES
http://localhost:4000/categories

# USING QUERIES

# by a search word (will compare each product's title)
http://localhost:4000/products?search="iphone"

# by brand
http://localhost:4000/products?brand="apple"

# by rating (will give all products with higher rating)
http://localhost:4000/products?rating=3

# max (give all products with lower price)
http://localhost:4000/products?max=300

# min (give all products with higher price)
http://localhost:4000/products?min=300

# max and min (give all products with a price within)
http://localhost:4000/products?min=300&max=500
```

## Required Tasks

### 1. Fetch and show all products

In `Products.jsx` fetch and present all "basic" cards data using the `.../products` route.

### 2. Fetch the full detail of a product

In `Popup.jsx` fetch and present one card's full details using the `.../product/:id` route.

### 3. Show all categories in side navbar

In `SideNavbar.jsx` fetch and present all categories inside the `<ul>` using the `.../categories` route.

## Bonus Tasks

### 1. Filter by category 🌶️

Pressing on a category will filter all products on the main page

### 2. Build a search bar 🌶️🌶️

Add a text input that allows users to search keywords.
This should be compared to the product's title.

See API specification above to fetch products by search word.

### 3. Build filters 🌶️🌶️🌶️

Add select/text/number inputs to allow users to filter products by

- brand
- min price
- max price
- rating

### 4. Built a cart 🌶️🌶️🌶️

- Add a button which enable adding products to cart.
- Pressing on the cart button in the top navbar should open a new popup with all products to buy.
- Users can increase and decrease the number of items in each product in the cart
- Users can remove products from cart all together
- Cart will calculate the total amount needs to be paid
