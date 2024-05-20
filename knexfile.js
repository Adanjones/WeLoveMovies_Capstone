const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "dpg-cp571cocmk4c73etpn70-a.oregon-postgres.render.com",
      user: "dev_xg5m_user",
      password: "cx8Aicyqe5zNouA0kwOKOYn1s5BoncyH",
      database: "dev_xg5m",
      ssl: {
        rejectUnauthorized: false // this will ignore self-signed certificates
      }
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
