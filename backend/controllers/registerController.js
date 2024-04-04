// controllers/loginController.js

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = 'mongodb://docker:mongopw@localhost:55002'

  async function register(req, res) {
    const { name, email, username, password, passwordConfirm } = req.body;

    const client = new MongoClient(uri,  {
      serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      }
    );

    if(password !== passwordConfirm) res.status(400).json({ success: false, message: 'Passwords do not match' });
    else {
      async function run() {
        try {
          // Connect the client to the server
          await client.connect();
          // Establish and verify connection
          await client.db("admin").command({ ping: 1 });
          const db = client.db("prod-app-db");
          const collection = db.collection('users');
  
          const existingUser = await collection.findOne({ username: username });
          if (existingUser) {
            return res.status(400).json({ success: false, message: 'Username already exists' });
          }
          const result = await collection.insertOne({name,email,username,password});
          res.status(201).json({ success: true, message: 'User created successfully', insertedId: result.insertedId });
        
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
    }
  }

  module.exports = {
    register,
  };