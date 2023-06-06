const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Deepak:Dreamers111@cluster0.dmcay.mongodb.net/Task-Manager-API?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
