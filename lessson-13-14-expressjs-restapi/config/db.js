const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });

    console.log("Mongo DB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
