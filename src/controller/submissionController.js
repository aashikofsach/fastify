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

//TODO : we have to add validation layer 
async function createSubmission(req, res) {

  console.log(req.body, "yaha tak")
  const response = await this.submissionService.addSubmission(req.body) ;
  return res.status(200).send({
    error : {},
    data : response,
    success : true ,
    message : "created submission successfully "
  })
}

module.exports = { pingController, createSubmission };
