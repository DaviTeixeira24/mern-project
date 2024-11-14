import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Quando "true" realiza as funçoes createdAt e updatedAt assim que um produto é adicionado
);

const Product = mongoose.model("Product", productSchema); //criando modelo dos produtos

export default Product;
