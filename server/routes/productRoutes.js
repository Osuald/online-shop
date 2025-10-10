import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts); // GET all products
router.post("/", createProduct); // POST new product
router.get("/:id", getProductById); // GET one product
router.put("/:id", updateProduct); // PUT update
router.delete("/:id", deleteProduct); // DELETE product

export default router;
