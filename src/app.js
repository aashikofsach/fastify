const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
const repositoryPlugin = require("./repositories/repositoryPlugin")
const todoRoute = require("./routes/api/v1/submissionRoute");
/*
* @param {Fastify object} fastify
* @param {*} options

*/
async function app(fastify, options) {
  await fastify.register(require("@fastify/cors"));
  await fastify.register(repositoryPlugin)
  await fastify.register(servicePlugin);

  await fastify.register(require("./routes/apiRoute"), { prefix: "/api" });

  await fastify.register(todoRoute, { prefix: "/todos" });
}

module.exports = fastifyPlugin(app);
repositoryPlugin