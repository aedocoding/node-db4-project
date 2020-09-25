const { select } = require("./db-config");
const db = require("./db-config");

function getRecipes() {
  return db("recipes");
}
function getShoppingList(recipe_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredients_id")
    .where("r.id", recipe_id)
    .select("i.name", "ri.quantity");
}
function getInstructions(recipe_id) {
  return db("recipes as r")
    .join("instructions as i", "r.id", "i.recipe_id")
    .where("r.id", recipe_id)
    .orderBy("i.step")
    .select("i.step", "i.action");
}

function getRecipesUsesIngredient(ingredient_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .where("ri.ingredients_id", ingredient_id)
    .select("r.name");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesUsesIngredient,
};
