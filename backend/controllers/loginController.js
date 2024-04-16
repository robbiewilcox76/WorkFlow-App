// controllers/loginController.js
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = 'mongodb://docker:mongopw@localhost:55001'

  async function login(req, res) {
    const { username, password } = req.body;

    const client = new MongoClient(uri,  {
      serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      }
    );

    async function run() {
      try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        const db = client.db("prod-app-db");
        const collection = db.collection('users');

        const user = await collection.findOne({ username: username, password: password });
        if(user) res.json({ success: true , id: user._id});
        else res.status(401).json({ success: false, message: 'Invalid username or password' });
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  }

  module.exports = {
    login,
  };
