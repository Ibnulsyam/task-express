const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const productController = require("../controller/controller");

//Show All Data
router.get("/product", productController.index);

//Show Data by ID
router.get("/product/:id", productController.view);

//Post data
router.post("/product", upload.single("image_url"), productController.store);

//Update Data
router.put(
  "/product/:id",
  upload.single("image_url"),
  productController.update
);

//Delete Data
router.delete("/product/:id", productController.destroy);

module.exports = router;
