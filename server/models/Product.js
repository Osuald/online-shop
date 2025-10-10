import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

export const Product = mongoose.model("Product", productSchema);
