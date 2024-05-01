const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth.Route');
const adRoutes = require('./routes/adRoutes');
const postReports = require('./routes/postReports');
const postAdd =require('./routes/postAdd');
const path = require('path');
const description = require ('./routes/description');
const Notification = require('./routes/Notification');
const profileDeatails = require('./routes/profileDetails');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT_NO;

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true,
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

app.use(express.json());
app.use(adRoutes);
app.use('/api/auth',authRoute);
app.use('/Reports', postReports);
app.use('/postadd',postAdd);
app.use('/description',description);
app.use('/profile',profileDeatails);
app.use('/notification',Notification);



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

