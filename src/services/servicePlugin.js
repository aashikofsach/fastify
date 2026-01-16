const SubmissionService = require("./submissionService");
const fastifyPlugin = require('fastify-plugin')

async function servicePlugin(fastify, options) {
//   console.log(testService,fastify , "yeh bhi hai koi cheez");
  console.log("gujjar", fastify.submissionRepository)
  fastify.decorate("submissionService", new SubmissionService(fastify.submissionRepository));
    // console.log(testService,fastify , "yeh hai usse agli cheez" );

}

module.exports = fastifyPlugin(servicePlugin);
