const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${process.env.PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    listener();
  })
  .catch(console.error);
