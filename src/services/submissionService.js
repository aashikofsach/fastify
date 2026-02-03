const { fetchProblemDetails } = require("../apis/problemAdminApi");
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
    // here we have to make hit to problem admin service to have rhe problems details

    const problemId = submissionPayload.problemId;
    const userId = submissionPayload.userId;

    const problemAdminApiResponse = await fetchProblemDetails(problemId);

    if (!problemAdminApiResponse) {
      throw {
        message: "Not Able to create Submission ",
      };
    }

    console.log(
      problemAdminApiResponse.data.codeStubs,
      "fetched problem during submission from problem admin",
    );

    const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(
      (codeStub) =>
        codeStub.language.toLowerCase() ===
        submissionPayload.language.toLowerCase(),
    );

    console.log(
      languageCodeStub,
      "here we find the required language codeStub",
    );

    submissionPayload.code =
      languageCodeStub.startSnippet +
      `\n\n` +
      submissionPayload.code +
      `\n\n` +
      languageCodeStub.endSnippet;

    // return true;

    // below we are writing so as our submission also go in db
    const submission =
      await this.submissionRepository.createSubmission(submissionPayload);

    if (!submission) {
      throw {
        message: "Not Able to create Submission ",
      };
    }
    console.log(submission);
    // below one is adding the submisson in our queue(bullMq)
    // const response = await SubmissionProducer(submission);
    const response = await SubmissionProducer({
      [submission._id]: {
        code: submission.code,
        language: submission.language,
        inputCase: problemAdminApiResponse.data.testCases[0].input,
        outputCase: problemAdminApiResponse.data.testCases[0].output,
        userId,
        submissionId : submission._id
      },
    });
    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
