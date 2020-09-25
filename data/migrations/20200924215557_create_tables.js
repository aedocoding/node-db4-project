exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step").notNullable();
      tbl.string("action").notNullable();
      tbl.integer("recipe_id").notNullable().references("recipes.id");
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl.integer("recipe_id").notNullable().references("recipes.id");
      tbl.integer("ingredients_id").notNullable().references("ingredients.id");
      tbl.float("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
