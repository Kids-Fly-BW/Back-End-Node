exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 255)
        .unique()
        .notNullable();

      tbl.string("password", 255).notNullable();

      tbl.string("email", 255);
    })

    .createTable("profiles", tbl => {
      tbl.increments();

      tbl.string("number_travelers");

      tbl.string("children-aquipment", 255);

      tbl.string("luggage-details", 255);

      tbl.string("disability", 255);

      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("profiles");
};
