exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "Puddin" },
    { id: 2, name: "Kake" },
  ]);
};
