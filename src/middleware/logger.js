// src/middleware/logger.js

/**
 * A simple logger middleware for Express.
 * It logs the method, URL, timestamp, and IP address of every incoming request.
 * This fulfills a specific requirement in your coursework.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 */
function loggerMiddleware(req, res, next) {
  // Get current timestamp in a readable format
  const timestamp = new Date().toISOString();

  // Get the request method (e.g., GET, POST)
  const method = req.method;

  // Get the request URL
  const url = req.originalUrl;

  // Get the IP address of the client
  const ip = req.ip;

  // Log the formatted message to the console
  console.log(`[${timestamp}] ${method} ${url} - from ${ip}`);

  // Pass control to the next middleware in the stack
  next();
}

module.exports = loggerMiddleware;
