const express = require('express');
const orderRoute = express.Router();
const protect = require('../middleware/Auth');
const asyncHandler = require("express-async-handler");
const Order = require('../models/Order'); // Import the Order model

orderRoute.post("/", protect, asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        ShippingPrice,
        totalPrice,
        price
    } = req.body;
    
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No order items found!");
    } else {
        const order = new Order({
            orderItems,
            shippingAddress,
            ShippingPrice,
            totalPrice,
            price,
            user: req.user._id
        });
        
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
}));

module.exports = orderRoute;
