  

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.boolean('isAdmin');
      table.boolean('isClient');
      table.boolean('isDonor');
      table.boolean('isVolunteer');
      table.string('phoneNumber');
      table.date('birthday');
      table.string('shirtSize');
      table.string('streetAddress');
      table.string("city");
      table.string("state");
      table.integer("zipCode");
      table.string("businessName");
      table.date("createdOn");
      table.integer("createdAtEvent_Id");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };