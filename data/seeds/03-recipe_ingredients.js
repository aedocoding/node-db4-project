exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    { id: 1, quantity: 3.5, recipe_id: 1, ingredients_id: 1 },
    { id: 2, quantity: 2, recipe_id: 1, ingredients_id: 2 },
    { id: 3, quantity: 4, recipe_id: 1, ingredients_id: 3 },
    { id: 4, quantity: 1, recipe_id: 2, ingredients_id: 1 },
    { id: 5, quantity: 1, recipe_id: 2, ingredients_id: 2 },
    { id: 6, quantity: 2, recipe_id: 2, ingredients_id: 3 },
  ]);
};
