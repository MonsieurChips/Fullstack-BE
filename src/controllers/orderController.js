// src/controllers/orderController.js

const { getDb } = require("../utils/database");

const ORDERS_COLLECTION = "orders";

/**
 * Creates a new order and saves it to the database.
 */
exports.createOrder = async (req, res) => {
  const orderData = req.body;

  // Basic validation
  if (
    !orderData.name ||
    !orderData.phone ||
    !orderData.items ||
    orderData.items.length === 0
  ) {
    return res
      .status(400)
      .json({
        message: "Invalid order data. Name, phone, and items are required.",
      });
  }

  try {
    const db = getDb();
    // Add a timestamp to the order
    const newOrder = {
      ...orderData,
      createdAt: new Date(),
    };

    const result = await db.collection(ORDERS_COLLECTION).insertOne(newOrder);

    res.status(201).json({
      message: "Order created successfully",
      orderId: result.insertedId,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};
