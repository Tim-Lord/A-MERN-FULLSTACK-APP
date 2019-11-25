const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

//Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}... Press Ctrl + C to exit...`);
});
