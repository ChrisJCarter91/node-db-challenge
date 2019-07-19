
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: "Finish AirBnB Styling", description: "See apple website for reference"},
        {name: "", description: ""},
        {name: "", description: ""}
      ]);
    });
};
