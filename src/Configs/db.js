const { mongoose } = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/greatVibeMovieApp"
  );
};

//mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/greatVibeMovieApp
