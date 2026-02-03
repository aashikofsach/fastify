const {Worker} = require("bullmq");

// import redisConnection from "../config/redisConfig.js";
const redisConnection = require("../config/redisConfig.js");

function evaluationWorker(queue) {
  new Worker(queue, async (job) => {
    if (job.name === "EvaluationJob") {
      console.log(job);
    }
  },{connection : redisConnection});
}

module.exports = evaluationWorker;
