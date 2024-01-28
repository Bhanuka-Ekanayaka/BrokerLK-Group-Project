const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postReports=require('./routes/postReports');

const app = express();
const PORT = 5001;

app.use(cors());

app.use(express.json());
app.use('/api', authRoutes);

app.use('/Reports',postReports);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


/* Purpose: The Server.js file is the entry point for your Node.js server. 
It sets up the Express application, configures middleware, defines routes, and starts the server listening on a specific port.
Reason for Use: The server file is where you configure the entire backend application. 
It brings together different parts of your application, such as routes, middleware, and database connections. 
Keeping server-related logic in one file makes it easier to understand the overall structure of your backend and manage global configurations. */

