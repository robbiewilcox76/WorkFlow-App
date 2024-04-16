// controllers/notesController.js

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = 'mongodb://docker:mongopw@localhost:55001'
const mongoose = require('mongoose');

  async function addNewNote(req, res) {
    const { noteTitle, noteContent,id } = req.body;

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
          await client.connect();
          await client.db("admin").command({ ping: 1 });
          const db_first = client.db("prod-app-db");
          const collection_first = db_first.collection('users');
          const objectId = new mongoose.Types.ObjectId(id);
          const existingUser = await collection_first.findOne({ _id: objectId });
          //console.log(existingUser);

          if (!existingUser) {
            return res.status(400).json({ success: false, message: 'user does not exist' });
          }
          const db = client.db("prod-app-db");
          const collection = db.collection('notes');
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });
          const formattedTime = currentDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });
          const formattedDateTime = `${formattedDate} ${formattedTime}`;
          //console.log(formattedDateTime);

          const result = await collection.insertOne({noteTitle, noteContent, id, date: formattedDateTime});
          res.status(201).json({ success: true, message: 'Note added successfully' });
        } catch (err) {
            console.error('Error adding note:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } finally {
          await client.close();
        }
      }
      run().catch(console.dir);
  }

  async function getNotes(req, res) {
    const id = req.query.id;
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
              await client.connect();
              await client.db("admin").command({ ping: 1 });
              const db = client.db("prod-app-db");
              const collection = db.collection('notes');
              //console.log(id)
              //const objectId = new mongoose.Types.ObjectId(id);
              const notesCursor = collection.find({ id: id });
              const notesArray = await notesCursor.toArray();
             /* console.log(notesArray);
              notesArray.forEach(note => {
                console.log("Title:", note.noteTitle);
                console.log("Content:", note.noteContent);
              });*/
              res.status(201).json({ success: true, notes: notesArray });
            } catch (err) {
                console.error('Error adding note:', err);
                res.status(500).json({ success: false, message: 'Internal server error' });
            } finally {
              await client.close();
            }
          }
        run().catch(console.dir);
    }


  async function deleteNote(req, res) {
    const id = req.query.id;

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
          await client.connect();
          await client.db("admin").command({ ping: 1 });
          const db_first = client.db("prod-app-db");
          const db = client.db("prod-app-db");
          const collection = db.collection('notes');
          const objectId = new mongoose.Types.ObjectId(id);
          const result = await collection.deleteOne({ _id : objectId });
          res.status(201).json({ success: true, message: 'Note added successfully' });
        } catch (err) {
            console.error('Error adding note:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } finally {
          await client.close();
        }
      }
      run().catch(console.dir);
  }

  module.exports = {
    addNewNote,
    getNotes,
    deleteNote,
  };