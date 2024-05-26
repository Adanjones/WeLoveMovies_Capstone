if (process.env.USER) require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();

const moviesRouter = require("./movies_route/movies.router");
const reviewsRouter = require("./reviews_route/reviews.router");
const theatersRouter = require("./theaters_route/theaters.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const { PORT = 5001 } = process.env; // Use PORT environment variable

app.use(express.json());

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: "https://welovemovies-frontend-srnh.onrender.com", // Update this to match your frontend's URL
  optionsSuccessStatus: 200 // For legacy browser support
}));

app.use(morgan("dev"));

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
