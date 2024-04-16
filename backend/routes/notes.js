// routes/notes.js
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/add-note', notesController.addNewNote);
router.get('/get-notes', notesController.getNotes);
router.delete('/delete-note', notesController.deleteNote);

module.exports = router;
