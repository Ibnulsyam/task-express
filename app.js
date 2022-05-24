const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    status: "Failed",
    massage: "Resource " + req.originalUrl + " Not found",
  });
});

app.listen(3001, () => console.log("server: http//localhost:3001"));
