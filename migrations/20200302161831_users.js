exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 255)
        .unique()
        .notNullable();

      tbl.string("password", 255).notNullable();

      tbl.string("email", 255).notNullable();

      tbl
        .integer("booking_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("booking")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("profile_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("profiles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("profiles", tbl => {
      tbl.increments();

      tbl.integer("travelers_number").notNullable();

      tbl.string("children-aquipment", 550);

      tbl.string("luggage-details", 550);

      tbl.string("disability", 540);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("profiles");
};
