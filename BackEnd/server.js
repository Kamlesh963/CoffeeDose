const express = require("express");
const config = require("./Configure/config");
const product = require("./models/usermodels");
const cart = require("./models/cartmodel");
const signupModel  = require("./models/Signupmodel");
const Address  = require("./models/addressmodel");
const app = express();

config();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/api/products", async (req, res) => {
  try {
    const products = req.body;
    const createdProducts = await product.insertMany(products);
    console.log(`${createdProducts.length} products added successfully`);
    res.status(201).json({ message: 'Products added successfully', createdProducts });
  } catch (error) {
    console.error('Error adding products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const Products = await product.find({});
    res.status(200).json(Products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/category", async (req, res) => {
  try {
    const { Coffeeid } = req.query;

    if (!Coffeeid) {
      return res.status(400).json({ error: 'Coffeeid parameter is missing' });
    }

    // Fetch products with the specified Coffeeid
    const Products = await product.find({ Coffeeid });
    res.status(200).json(Products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post("/api/cart", async (req, res) => {
  try {
    const productData = req.body;
    const cartItem = await cart.create(productData);
    console.log('Product added to cart:', cartItem);
    res.status(201).json({ message: 'Product added to cart successfully', cartItem });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/cart", async (req, res) => {
  try {
    const cartItems = await cart.find({});
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put("/api/cart/:id", async (req, res) => {
  const itemId = req.params.id;
  const { Quantity } = req.body;

  try {
    const updatedItem = await cart.findByIdAndUpdate(itemId, { Quantity }, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete("/api/cart/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    await cart.findByIdAndDelete(itemId);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post("/api/signup", async (req, res) => {
  try {
      const { name, email, password } = req.body;
      // Check if user already exists
      const existingUser = await signupModel.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'User already exists' });
      }
      // Create new user
      const newUser = new signupModel({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'Sign up successful' });
  } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/address", async (req, res) => {
  try {
    const formData = req.body;
    const newAddress = new Address(formData);
    await newAddress.save();
    console.log('Address saved successfully:', newAddress);
    res.status(201).json({ message: 'Address saved successfully', address: newAddress });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// this for the login page to check the user exists or not
app.post("/api/login", async (req, res) => {
  try {
      const { email, password } = req.body;
      // Check if user exists and password matches
      const user = await signupModel.findOne({ email, password });
      if (user) {
          res.status(200).json({ success: true });
      } else {
          res.status(401).json({ success: false });
      }
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(1300, () => {
  console.log("Server is running on http://localhost:1300");
});
