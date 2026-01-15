const SubmissionRepository = require("./submissionRepository");
const fastifyPlugin = require('fastify-plugin')

async function repositoryPlugin(fastify, options) {
//   console.log(testService,fastify , "yeh bhi hai koi cheez");
  fastify.decorate("submissionRepository", new SubmissionRepository());
    // console.log(testService,fastify , "yeh hai usse agli cheez" );

}

module.exports = fastifyPlugin(repositoryPlugin);
