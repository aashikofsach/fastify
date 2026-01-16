const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id for the submission is missing"],
  },
  problemId: {
    type: String,
    required: [true, "problemId for the submission is missing"],
  },
  code: {
    type: String,
    required: [true, "Code for the submission is missing"],
  },
  language: {
    type: String,
    required: [true, "Language for the submission is missing"],
  },
  status: {
    type: String,
    enum: ["pending", "Success", "RE", "TLE", "MLE", "WA"],
    default: "pending",
  },
});

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
