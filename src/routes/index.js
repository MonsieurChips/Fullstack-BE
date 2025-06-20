// src/routes/index.js

const express = require("express");
const router = express.Router();

const lessonRoutes = require("./lessons");
const orderRoutes = require("./orders");

// All routes related to lessons will be prefixed with /lessons
// e.g., /api/lessons, /api/lessons/search
router.use("/lessons", lessonRoutes);

// All routes related to orders will be prefixed with /orders
// e.g., /api/orders
router.use("/orders", orderRoutes);

module.exports = router;
