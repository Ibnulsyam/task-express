const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1>Home Page </h1>");
});

router.get("/aktors/avengers", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Captain America",
      name: "Steven Rogers",
      gender: "Male",
    },
    {
      id: 2,
      title: "Spider-man",
      name: "Zendaya",
      gender: "Female",
    },
    {
      id: 3,
      title: "Spider-man",
      name: "Tom Holland",
      gender: "Male",
    },
  ]);
});

module.exports = router;
