const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController'); // Import the users controller

// Route to get all users
router.get('/', usersController.getAllUsers);

// Route to get a specific user by ID
router.get('/:id', usersController.getUserById);

module.exports = router;
