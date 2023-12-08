const express = require("express");
const connectWithDataBase = require("./config/db");
require("dotenv").config();

const app = express();

// Connecting with database
connectWithDataBase();
app.listen(process.env.PORT_NUMBER || 8000, () => {
  console.log("Server Started Running");
});
