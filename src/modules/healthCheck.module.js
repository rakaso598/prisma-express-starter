const express = require("express");
// const prisma = require("../db/prisma/client.prisma");

const healthCheckRouter = express.Router();

/**
 * Health-Check
 */
healthCheckRouter.get("/", (req, res, next) => {
  try {
    console.log("OK");
  } catch (e) {
    next(e);
  }
});

module.exports = healthCheckRouter;
