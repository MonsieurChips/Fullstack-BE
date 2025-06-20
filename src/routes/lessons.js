// src/routes/lessons.js

const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lessonController");

// IMPORTANT: The search route must be defined *before* the '/:id' route
// to avoid Express treating 'search' as an ID.

// GET /api/lessons/search?query=...
router.get("/search", lessonController.searchLessons);

// GET /api/lessons
router.get("/", lessonController.getAllLessons);

// PUT /api/lessons/:id
router.put("/:id", lessonController.updateLesson);

module.exports = router;
