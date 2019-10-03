
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entriess
      return knex('actions').insert([
        {id: 1, action: 'retest'},
        {id: 2, action: 'retest in duplicate'},
        {id: 3, action: 'retest in duplicate and higher dilution'}
      ]);
    });
};
