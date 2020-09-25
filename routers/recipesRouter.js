const express = require("express");

const router = express.Router();
const Actions = require("../data/db_model");

router.get("/", (req, res) => {
  Actions.getRecipes()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Actions.getShoppingList(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Actions.getInstructions(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

module.exports = router;
