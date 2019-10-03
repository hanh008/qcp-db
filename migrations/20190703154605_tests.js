
exports.up = function(knex) {
  return knex.schema.createTable('tests', table => {
      table.increments('id').primary()
      table.string('test')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tests')
};
