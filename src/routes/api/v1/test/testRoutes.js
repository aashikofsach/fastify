const testController  = require("../../../../controller/submissionController");

async function testRoute(fastify, options) {
  fastify.get("/ping", testController.pingController  );
}

module.exports= testRoute ; 
