// controllers/usersController.js

// Sample data (You can replace this with a database)
const users = [
    { id: 1, name: 'John', email: 'sample_email@yahoo.com' },
    { id: 2, name: 'Alice', email: 'sample_email@yahoo.com' },
    { id: 3, name: 'Bob', email: 'sample_email@yahoo.com' }
  ];
  
  // Function to get all users
  function getAllUsers(req, res) {
    res.json(users);
  }
  
  // Function to get a specific user by ID
  function getUserById(req, res) {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  }
  
  module.exports = {
    getAllUsers,
    getUserById
  };
  