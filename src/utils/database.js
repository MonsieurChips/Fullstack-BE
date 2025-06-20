// src/utils/database.js

const { MongoClient, ServerApiVersion } = require("mongodb");

// Get the MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI;

// Create a new MongoClient instance with specific server API options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

/**
 * Establishes a connection to the MongoDB database.
 * This function should be called once when the server starts.
 */
async function connectToDb() {
  if (db) {
    return db;
  }
  try {
    // Connect the client to the server
    await client.connect();
    // Set the database to be used
    db = client.db("StudyZone"); // You can name your database here
    return db;
  } catch (error) {
    console.error("Could not connect to the database:", error);
    throw error;
  }
}

/**
 * Returns the database instance.
 * Throws an error if the database is not connected.
 * @returns {Db} The MongoDB database instance.
 */
function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDb first.");
  }
  return db;
}

module.exports = { connectToDb, getDb };
