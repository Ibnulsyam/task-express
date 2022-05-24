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
      genre: "Male",
    },
    {
      id: 2,
      title: "Spider-man",
      name: "Zendaya",
      genre: "Female",
    },
    {
      id: 3,
      title: "Spider-man",
      name: "Tom Holland",
      genre: "Male",
    },
  ]);
});

router.get("/:name/:tools", (req, res) => {
  const { name, tools } = req.params;
  res.json({
    name,
    tools,
  });
});

module.exports = router;
