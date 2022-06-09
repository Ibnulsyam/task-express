const express = require("express");
const app = express();
const router = require("./routes");
const productRouter = require("./api/router/routes");
const { join } = require("path");

app.use(router);
app.use("/public", express.static(join(__dirname, "uploads")));
app.use("/api/v1", productRouter);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    status: "Failed",
    massage: "Resource " + req.originalUrl + " Not found",
  });
});

app.listen(3001, () => console.log("server: http//localhost:3001"));
