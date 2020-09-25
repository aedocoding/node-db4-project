const express = require("express");

const router = express.Router();
const Actions = require("../data/db_model");

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;
  Actions.getRecipesUsesIngredient(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "error processing query", error: err });
    });
});

module.exports = router;
