// import { Queue } from "bullmq";
const {Queue} = require("bullmq");

// import redisConnection from "../config/redisConfig.js";

const redisConnection = require("../config/redisConfig");

// export default new Queue('SubmissionQueue' , {connection : redisConnection}) ;

module.exports = new Queue("SubmissionQueue", { connection: redisConnection });
