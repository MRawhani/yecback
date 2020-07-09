const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const config = require("./config");
const Error = require("./helpers/Error");
const CompetitorsRoute = require("./routes/CompetitorsRoute");

process.on("uncaughtException", function (ex) {
  console.log(ex);
  //these functions for handling un caought errors, in order not to hang the node
});
process.on("unhandledRejection", function (ex) {
  console.log(ex);
});


mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      // const fakeDb = new FakeDb();
      //fakeDb.seedDb();
      console.log("sucsess");
    }
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

app.use("/api/v1/apply", CompetitorsRoute);

app.use(Error);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log("Running");
});
