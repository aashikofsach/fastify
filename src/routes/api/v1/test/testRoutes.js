const testController  = require("../../../../controller/testController");

async function testRoute(fastify, options) {
  fastify.get("/ping", testController.pingController  );
}

module.exports= testRoute ; 
