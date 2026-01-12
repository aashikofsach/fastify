// const testService = require("../services/testservice");

async function pingController(req, res) {
  //testService injected in fastify object by using decorators
  console.log(this.testService, "abhi toh undefined dena chahiye "); // here we can access the fastify with this object
  const response = await this.testService.pingCheck();
  console.log(response);
  return res.send({
    data: response,
  });
}

async function submissionController(req, res) {

  const response = await this.testService.addSubmission(req.body)
}

module.exports = { pingController, submissionController };
