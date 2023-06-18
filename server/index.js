const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Define routes
app.get("/", (req, res) => {
  console.log("req received");
  res.json({ message: "Hello from server", date: new Date().getTime() });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
