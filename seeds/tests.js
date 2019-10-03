
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {id: 1, test: 'M0100-01 Aerobic Plate Count'},
        {id: 2, test: 'M0200-01 Coliform Count'},
        {id: 3, test: 'M1000-01 Thermophilic Spore Count'}
      ]);
    });
};
