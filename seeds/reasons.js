
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('reasons').insert([
        {id: 1, reason: 'contamination'},
        {id: 2, reason: 'spreader'},
        {id: 3, reason: 'control failure'}
      ]);
    });
};
