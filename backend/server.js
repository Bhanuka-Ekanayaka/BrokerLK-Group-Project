const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: false,  
  }));

app.use(express.json());
app.use('/api', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

