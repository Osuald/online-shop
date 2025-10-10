import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Load env variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Basic test route
app.get("/", (req, res) => {
  res.send("Fancy Online Shop backend is connected");
});

// Import routes
import productRoutes from "./routes/productRoutes.js";
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
