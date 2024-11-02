// Create a mongodb website
// create a free mb cluster
// create server
// 7lcUjYPmexXHc6Tq
// create the connection string
// connect to mongodb connect
// After connction write first monogodb Json Data
// Now connect the mongodb with VScode
// To connect the mongodb with vscode we need the npm
//Npm package name is mongodb Node.js Driver
// we cannot directly require it we need to install
// we can install by directly npm i mongodb
//

const { MongoClient, Collection } = require("mongodb");
const uri =
  "mongodb+srv://rahul6898sharma:7lcUjYPmexXHc6Tq@rahul1data.89iyr.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "Rahul1DATA";

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// this