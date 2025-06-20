// server.js

// Load environment variables from .env file
require("dotenv").config();

const app = require("./app");
const { connectToDb } = require("./src/utils/database");

// Get the port from environment variables, with a default of 3000
const PORT = process.env.PORT || 3000;

/**
 * Main function to start the server.
 * It first connects to the database and then starts the Express app.
 */
async function startServer() {
  try {
    // Establish connection to the database
    await connectToDb();
    console.log("Successfully connected to MongoDB Atlas!");

    // Start listening for requests
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    // Exit the process with an error code if the database connection fails
    process.exit(1);
  }
}

// Execute the server start function
startServer();
