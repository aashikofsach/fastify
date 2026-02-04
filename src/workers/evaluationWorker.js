const {Worker} = require("bullmq");

const redisConnection = require("../config/redisConfig.js");
const axios = require("axios");

function evaluationWorker(queue) {
  new Worker(queue, async (job) => {
    if (job.name === "EvaluationJob") {
  try {
      const response =  await axios.post("http://localhost:3002/sendPayload", {
        userId : job.data.userId,
        payload : job.data
      })
      console.log(response, "getting response from after /sendPayload")
      console.log(job.data);
    
  } catch (error) {
    console.log(error, "Buddha ji")
  }
    }
  },{connection : redisConnection});
}

module.exports = evaluationWorker;
