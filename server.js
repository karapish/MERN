const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
require("./models");

//connect to mongoose
mongoose.connect(
  "mongodb+srv://saberesancestrales:chagras2020@cluster0.powcu.mongodb.net/noteDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log("Listening");
});
