const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGO_URL);
=======
    await mongoose.connect(process.env.MONGO_LOCAL);
>>>>>>> 3ba457a37903ac3ae34078ba16b500d38e77eb11
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;