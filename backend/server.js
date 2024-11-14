//criando um express app
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //Função que permite a aceitação de dados "JSON" no req.body

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is Ready");
});
app.listen(5000, () => {
  connectDB(); //callbackFunction para conectar com BD
  console.log("Server started at http://localhost:" + PORT);
});
