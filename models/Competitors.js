const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Competitors",
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
      type: Date,
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
