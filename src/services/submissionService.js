
const SubmissionProducer = require("../producer/submissionQueueProducer")


class SubmissionService {
  constructor() {
    // here we can inject repositoyr to servoce as we follow in express also
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission)
  {
    const response = await SubmissionProducer(submission)
    return response ;
  }
}

module.exports = SubmissionService ;
