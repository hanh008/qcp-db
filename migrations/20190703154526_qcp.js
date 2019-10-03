
exports.up = function(knex) {
  return knex.schema.createTable('qcp', table => {
      table.increments('qcp_number').primary()
      table.date('date_raised')
      table.string('raised_by')
      table.string('test_code')
      table.string('factory')
      table.string('spec')
      table.string('batch')
      table.string('unit')
      table.string('concerning')
      table.string('reason')
      table.string('action')
      table.date('results_due')
      table.boolean('reviewed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('qcp')
};
