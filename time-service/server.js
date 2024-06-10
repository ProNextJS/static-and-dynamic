const express = require("express");

express()
  .get("/", (req, res) => {
    res.json({ time: new Date().toLocaleTimeString() });
  })
  .listen(8080, () =>
    console.log("Server is running on http://localhost:8080/")
  );
