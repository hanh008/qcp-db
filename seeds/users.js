
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user: 'Goku'},
        {id: 2, user: 'Vegeta'},
        {id: 3, user: 'Gohan'},
        {id: 4, user: 'Trunks'}
      ]);
    });
};
