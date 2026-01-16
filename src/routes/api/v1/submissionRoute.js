const {
  createSubmission,
} = require("../../../controller/submissionController");

// async function submissionRoute(fastify, options) {
//   fastify.get("/", async (request, reply) => {
//     return { message: "Submission service running" };
//   });
// }


async function submissionRoute(fastify, options) {
  console.log("yaha tak bhi ")
  fastify.post("/", createSubmission);
}

module.exports = submissionRoute;
