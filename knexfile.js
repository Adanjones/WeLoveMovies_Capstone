const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
  RENDER_HOST,
  RENDER_USER,
  RENDER_PASSWORD,
  RENDER_DATABASE,
} = process.env;

const renderConnection = {
  host: RENDER_HOST,
  user: RENDER_USER,
  password: RENDER_PASSWORD,
  database: RENDER_DATABASE,
  ssl: {
    rejectUnauthorized: false, // this will ignore self-signed certificates
  },
};

module.exports = {
  development: {
    client: "pg",
    connection: renderConnection,
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
