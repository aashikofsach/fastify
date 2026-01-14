// import {Redis} from "ioredis";
const { Redis } = require("ioredis");

// import serverConfig from "./serverConfig.js";
const serverConfig = require("./serverConfig");

const redisConfig = {
  port: serverConfig.REDIS_PORT,
  host: serverConfig.REDIS_HOST,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

// export default redisConnection ;

module.exports = redisConnection;
