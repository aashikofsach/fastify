const fastify = require("fastify")({ logger: true }); // here we call the fastify constructor
const app = require('./app')
const PORT = 3000;

fastify.register(app)

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.err(err);
    process.exit(1);
  }
  console.log(`server is running on port: ${PORT}`);
});
