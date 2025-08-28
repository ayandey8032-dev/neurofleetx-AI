require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json()); // parse JSON (Postman raw, fetch API)
app.use(express.urlencoded({ extended: true })); // parse form submissions
app.use(cookieParser());
app.use(checkUser);

// VIEW ENGINE
app.set("view engine", "ejs");

const PORT = 3000;
const db = process.env.DBURI;

// DB CONNECT
mongoose.connect(db)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
  });

// ROUTES
app.get("/", (req, res) => res.render("login"));
app.get("/login", (req, res) => res.render("login"));
app.get("/dashboard", requireAuth, (req, res) => {
  res.render("dashboard", {
    user: res.locals.user,
  });
});
app.use(authRoutes);
