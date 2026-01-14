
// import submissionQueue from "../queues/submissionQueue.js";
const submissionQueue = require('../queues/submissionQueue')


module.exports =  async function(payload : Record<string, unknown>) 
{
   await submissionQueue.add("SubmissionJob" , payload) ;
   console.log("submission job added successfully ");
}