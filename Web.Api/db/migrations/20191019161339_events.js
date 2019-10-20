
exports.up = function(knex) {
  return knex.schema.createTable('events', (table)=>{
      table.increments();
      table.string('name');
      table.date("date");
      table.json("description");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("events");
};
