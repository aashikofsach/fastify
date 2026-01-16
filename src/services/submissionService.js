const SubmissionProducer = require("../producer/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // here we can inject repositoyr to servoce as we follow in express also
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submissionPayload) {
    // below we are writing so as our submission also go in db
    const submission = await this.submissionRepository.createSubmission(
      submissionPayload
    );

    if (!submission) {
      throw {
        message: "Not Able to create Submission ",
      };
    }
    console.log(submission);
    // below one is adding the submisson in our queue(bullMq)
    const response = await SubmissionProducer(submission);
    return {queueResponse : response , submission};
  }
}

module.exports = SubmissionService;
