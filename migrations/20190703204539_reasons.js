
exports.up = function(knex) {
  return knex.schema.createTable('reasons', table => {
      table.increments('id').primary()
      table.string('reason')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reasons')
};
