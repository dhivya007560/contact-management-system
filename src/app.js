const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

app.use("/contacts", contactRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});