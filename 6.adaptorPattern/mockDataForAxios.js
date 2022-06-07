const express = require("express");

const app = express();

app.get("/api/user", (req, res) => {
  res.json({ id: req.query.id, name: "mock_name" })
})

app.listen(8080, () => {
  console.log(`running at http://localhost:8080`);
})