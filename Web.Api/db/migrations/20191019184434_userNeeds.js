
exports.up = function(knex, Promise) {
  return knex.schema.createTable("userNeeds", (table)=>{
      table.increments();
      table.string('name');
      table.text('description');
      table.integer("userId")
        .references('id')
        .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("userNeeds");
};
