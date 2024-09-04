const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Majors Solutions - Api Test VPS");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + PORT);
});
