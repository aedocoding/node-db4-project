exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, name: "sugar" },
    { id: 2, name: "butter" },
    { id: 3, name: "flour" },
  ]);
};
