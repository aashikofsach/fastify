const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
/*
* @param {Fastify object} fastify
* @param {*} options

*/
async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));

  fastify.register(require("./routes/apiRoute"), { prefix: "/api" });

  fastify.register(servicePlugin)
}

module.exports = fastifyPlugin(app);