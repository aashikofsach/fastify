const TestService = require("./testservice");
const fastifyPlugin = require('fastify-plugin')

async function servicePlugin(fastify, options) {
//   console.log(testService,fastify , "yeh bhi hai koi cheez");
  fastify.decorate("testService", new TestService());
    // console.log(testService,fastify , "yeh hai usse agli cheez" );

}

module.exports = fastifyPlugin(servicePlugin);
