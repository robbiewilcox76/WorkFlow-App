// controllers/loginController.js

const { executeQuery } = require('../database');

  async function login(req, res) {
    const { username, password } = req.body;

    // Check username and password (Replace this with your actual authentication logic)
    const query = await executeQuery('select id from users where username=? and password=?', [username,password]);
    if (query.length===1) {
      // Authentication successful
      res.json({ success: true , id: query[0].id});
    } else {
      // Authentication failed
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  }

  module.exports = {
    login,
  };
