const fastify = require("fastify")({ logger: true }); // here we call the fastify constructor
const app = require("./app");
// const PORT = 3000;
const serviceConfig = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: serviceConfig.PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server is running on port: ${serviceConfig.PORT}`);
});
