exports.seed = function (knex) {
  return knex("instructions").insert([
    { id: 1, action: "Step 1", step: 1, recipe_id: 1 },
    { id: 2, action: "Step 2", step: 2, recipe_id: 1 },
    { id: 3, action: "Step 3", step: 3, recipe_id: 1 },
    { id: 4, action: "Step 1", step: 1, recipe_id: 2 },
    { id: 5, action: "Step 2", step: 2, recipe_id: 2 },
    { id: 6, action: "Step 3", step: 3, recipe_id: 2 },
  ]);
};
