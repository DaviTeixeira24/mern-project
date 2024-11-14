import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // qundo passado um objeto vazio, o método irá buscar todos os objetos do BD
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Ocorreu um erro ao encontrar os produtos:", error.message);
    res.status(500).json({ success: false, message: "Erro no servidor!" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // usuario irá mandar os dados

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Por favor preencha todos os campos" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct }); //código de processamento de numero 201 siginifica que algo foi adicionado
  } catch (error) {
    console.log("Erro ao criar o protudo", error.message);
    res.status(500).json({ success: false, message: "Erro no servidor!" }); //código de processamento de numero 500 siginifica erro interno no servidor
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: true, message: "ID Inválido" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro no servidor!" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: true, message: "ID Inválido!" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Produto Deletado com sucesso!" });
  } catch (error) {
    console.log("Erro ao deletar o produto:", error.message);
    res.status(500).json({ success: false, message: "Erro no Servidor!" });
  }
};
