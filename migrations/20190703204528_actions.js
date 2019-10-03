
exports.up = function(knex) {
  return knex.schema.createTable('actions', table => {
      table.increments('id').primary()
      table.string('action')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('actions')
};
