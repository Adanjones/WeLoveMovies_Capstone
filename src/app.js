if (process.env.USER) require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

const moviesRouter = require("./movies_route/movies.router");
const reviewsRouter = require("./reviews_route/reviews.router");
const theatersRouter = require("./theaters_route/theaters.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Update this to match your frontend's URL
}));

app.use(morgan("dev"));

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
