import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log('Funcionando 🎆')
  } catch (error) {
    console.log("Error de conexion" + error)
  }