// server.js

// Load environment variables from .env file
require("dotenv").config();

const app = require("./app");
const { connectToDb } = require("./src/utils/database");


const PORT = process.env.PORT || 3000;


async function startServer() {
  try {

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
