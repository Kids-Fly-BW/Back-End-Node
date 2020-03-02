exports.up = function(knex) {
  return knex.schema
    .createTable("booking", tbl => {
      tbl.increments();

      tbl.string("airport_name", 255).notNullable();

      tbl.string("airline", 255).notNullable();

      tbl.integer("flight_number");

      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("trip_id")
        .unsigned()
        .references("id")
        .inTable("trips")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("trips", tbl => {
      tbl.increments();

      tbl
        .integer("booking_id")
        .unsigned()
        .references("id")
        .inTable("booking")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips").dropTableIfExists("booking");
};
