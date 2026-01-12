async function v1Plugin(fastify, options) {
  fastify.register(require("./test/testRoutes"), { prefix: "/test" });
  fastify.register(require("./submissionRoute"), { prefix: "/submission" });
}

module.exports = v1Plugin;
