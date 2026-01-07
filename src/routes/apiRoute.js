
async function apiPlugin(fastify, options) {
  fastify.register(require("./api/test/testRoutes"), { prefix: "/test" });
}

module.exports = (apiPlugin);
