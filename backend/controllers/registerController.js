// controllers/loginController.js

const { executeQuery } = require('../database');

  async function register(req, res) {
    const { name, email, username, password, passwordConfirm } = req.body;

    const [firstName,lastName] = name.split(" "); 
    if(password !== passwordConfirm) res.status(400).json({ success: false, message: 'Passwords do not match' });
    else {
      try { 
          const query = await executeQuery(
          'INSERT INTO users (username, password, firstname, lastname, email) VALUES (?, ?, ?, ?, ?);', 
          [username, password, firstName, lastName, email]);
          console.log(query);
          if(query.affectedRows==1) res.json({ success: true});
      }
      catch(error) {
        console.log(query);
        if(error.code === 'ER_DUP_ENTRY') res.status(500).json({ success: false, message: 'Username is taken' });
      }
    }
  }

  module.exports = {
    register,
  };