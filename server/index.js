const express = require("express");
const cors = require("cors");
const { getSummary } = require("./chatgptService");

const app = express();
const port = 3000;

app.use(cors());

// Define routes
app.get("/", async (req, res) => {
  console.log("req received");
  const response = await getSummary();
  console.log(response);
  res.json({
    message: "Hello from server",
    date: new Date().getTime(),
    response,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
