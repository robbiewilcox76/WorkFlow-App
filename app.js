const express = require('express');
const app = express();
const cors = require('cors');
const loginRouter = require('./backend/routes/login'); // login router
const registerRouter = require('./backend/routes/register'); // register router
const notesRouter = require('./backend/routes/notes'); // notes router
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/notes', notesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

