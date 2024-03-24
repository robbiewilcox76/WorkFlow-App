const express = require('express');
const app = express();
const cors = require('cors');
const usersRouter = require('./backend/routes/users'); // Import the users router
const loginRouter = require('./backend/routes/login'); // Import the login router
const registerRouter = require('./backend/routes/register'); // Import the login router
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

