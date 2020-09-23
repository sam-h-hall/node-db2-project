exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    // incrementing id column and primary key
    tbl.increments("id");
    tbl.string("VIN", 17).notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("year").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission_type");
    tbl.string("title_status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};