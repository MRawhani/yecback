const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const config = require("./config");
const Error = require("./Error");

const router = express.Router();
const path = require("path");
const fs = require("fs");

process.on("uncaughtException", function (ex) {
  console.log(ex);
  //these functions for handling un caought errors, in order not to hang the node
});
process.on("unhandledRejection", function (ex) {
  console.log(ex);
});
const Schema = mongoose.Schema;

mongoose
  .connect(config.DB_URI2, {
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
const UsersModel = mongoose.model(
  "Users",
  new Schema({
    firstName: {
      type: String,
      required: "first name is required",
    },

    lastName: {
      type: String,
      required: "last name is required",
    },

    gender: {
      type: String,
      required: "enser is required",
    },

    dateOfBirth: {
      type: String,
      required: "dateOfBirth is required",
    },

    governate: {
      type: String,
      required: "governate is required",
    },

    email: {
      type: String,
      required: "email is required",
    },
    mobile: {
      type: String,
      required: "mobile is required",
    },
    education: {
      type: String,
      required: "education is required",
    },
    job: {
      type: String,
      required: "job is required",
    },
    expereince: {
      type: String,
      required: "expereince is required",
    },
    acheivements: {
      type: String,
      required: "acheivements is required",
    },

    createdAt: { type: Date, default: Date.now },
  })
);

app.use(
  "/api/v1/apply",
  router.post("/registerNew", async function (req, res, next) {
    const data = { ...req.body };
    const user = new UsersModel(data);

    try {
      const reuslt = await user.save();
      console.log(reuslt);
      return res.status(200).json({ reuslt });
    } catch (err) {
      console.log(err);
      return next({ type: "mongoose", err });
    }
  }) 
);

app.use(Error);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log("Running");
});
