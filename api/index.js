const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/User");
const databaseSeeder = require('./databaseSeeder');
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

// Logging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Database seeder routes
app.use('/api/seed', databaseSeeder);

// Routes for users
app.use('/api/users', userRoute);

// Routes for products
app.use('/api/products', productRoute);

// Routes for order
app.use('/api/orders', orderRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



//taliyaatia
//hepR4JcXoZnxkpdF
//mongodb+srv://taliyaatia:hepR4JcXoZnxkpdF@cluster0.8tfz0hz.mongodb.net/PERFUME-SHOP

