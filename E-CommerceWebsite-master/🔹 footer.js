const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Product data (mock) – later you can replace with DB
const products = {
  "men-clothing": [
    { id: 1, name: "Casual Shirt", price: 999, stock: 12 },
    { id: 2, name: "Denim Jeans", price: 1499, stock: 8 }
  ],
  "women-clothing": [
    { id: 1, name: "Kurti", price: 799, stock: 15 },
    { id: 2, name: "Maxi Dress", price: 1299, stock: 5 }
  ],
  "men-accessories": [
    { id: 1, name: "Leather Belt", price: 499, stock: 20 },
    { id: 2, name: "Sunglasses", price: 699, stock: 7 }
  ],
  "zara": [
    { id: 1, name: "Zara T-Shirt", price: 1299, stock: 4 },
    { id: 2, name: "Zara Skirt", price: 1599, stock: 3 }
  ]
};

// ✅ API Endpoint: Get products by category
app.get("/api/items/:category", (req, res) => {
  const category = req.params.category;
  const data = products[category];

  if (!data) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(data);
});

// ✅ Root route (test)
app.get("/", (req, res) => {
  res.send("E-Commerce API is running 🚀");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
