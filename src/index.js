const fastify = require("fastify")({ logger: true }); // here we call the fastify constructor
const app = require("./app");
const connectToDB = require("./config/dbConfig");
// const PORT = 3000;
const serverConfig = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
 
 await connectToDB();
  
  console.log(`server is running on port: ${serverConfig.PORT}`);
});
