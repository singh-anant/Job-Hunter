const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDataBase = async () => {
  const connection = await mongoose.connect(process.env.MONGO_DB);
  try {
    if (connection) console.log("Successfully connected with database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectWithDataBase;
