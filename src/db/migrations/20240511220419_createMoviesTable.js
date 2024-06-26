
exports.up = function(knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("movie_id").primary();
    table.string("title");
    table.integer("runtime_in_minutes");
    table.string("rating");
    table.text("description");
    table.text("image_url");
    table.timestamp(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies");
};
