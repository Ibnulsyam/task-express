const { join } = require("path");
const fs = require("fs");
const Product = require("../model/model");

//Get Data to Database
const index = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

//Get Data by Id
const view = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

//Post Data to Database
const store = async (req, res) => {
  const { user_id, name, price, stock, status } = req.body;
  const image = req.file;

  if (image) {
    const target = join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }

  try {
    await Product.sync();
    const result = await Product.create({
      user_id,
      name,
      price,
      stock,
      status,
      image_url: `http://localhost:3001/public/${image.originalname}`,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

//Update Data to Database
const update = async (req, res) => {
  const { user_id, name, price, stock, status } = req.body;
  const image = req.file;

  if (image) {
    const target = join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }

  try {
    await Product.update(
      {
        user_id,
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:3001/public/${image.originalname}`,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({
      massage: "Product has been Updated",
    });
  } catch (err) {
    res.send(err);
  }
};

//Delete Data to Database
const destroy = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product has been Deleted",
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  store,
  index,
  view,
  update,
  destroy,
};
