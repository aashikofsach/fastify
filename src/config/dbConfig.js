const { ATLAS_DB_URL, NODE_ENV } = require("./serverConfig");
const { mongoose } = require("mongoose");

// async function connectToDB() {
//   try {

//     if (NODE_ENV === "development") {
//       await mongoose.connect(ATLAS_DB_URL);
//       console.log("mongodb connected")
//     }
//   } catch (error) {
//     console.log("Unable to connect to DB_URL");
//     console.log(error);
//   }
// }

let instance;

class DBConnection {
  #isConnected
  constructor(db_uri) {
    if (instance) {
      throw new Error("Only one connection exist");
    }
    this.uri = db_uri;
    instance = this;
    this.#isConnected = false;
  }

  async connect() {
    if (this.#isConnected) {
      throw new Error("DB Already Connected ");
    }
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
      this.#isConnected = true;
      console.log("db connected ")
    }
  }

  async disconnect() {
    this.#isConnected = false;
  }
}

const db = Object.freeze(new DBConnection())
// const db1 = new DBConnection()  this throw error as we can't make two instance of a certain class 

module.exports = db;
