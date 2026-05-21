import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import adminRoutes from "./router/admin.route.js";
import cartRoutes from "./router/cart.route.js";
import orderRoutes from "./router/order.route.js";
import paymentRoutes from "./router/payment.route.js";
import productRoutes from "./router/product.route.js";
import reviewRoutes from "./router/review.route.js";
import userRoutes from "./router/user.route.js";
import { handleWebhook } from "./controllers/payment.controller.js";

const app = express();

const allowedOrigins = ENV.CLIENT_URL
  ? ENV.CLIENT_URL.split(",").map((origin) => origin.trim()).filter(Boolean)
  : true;

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

app.post("/api/payments/webhook", express.raw({ type: "application/json" }), handleWebhook);

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error("Unhandled API error:", err);
  res.status(500).json({ message: "Internal server error" });
});

const port = ENV.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server is up and running on port ${port}`));
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});