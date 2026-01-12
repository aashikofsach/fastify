const { submissionController } = require("../../../controller/submissionController");

async function submissionRoute(fastify, options) {
  fastify.get("/", submissionController);
}

module.exports = submissionRoute ;