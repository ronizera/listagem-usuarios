const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@brainhub.3of1rtm.mongodb.net/meubanco?retryWrites=true&w=majority&appName=brainhub`
    );

    console.log("Conexão com o banco de dados realizada com sucesso.");
  } catch (error) {
    console.error(" Erro ao conectar com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
