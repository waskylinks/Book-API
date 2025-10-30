require('dotenv').config(); // Load env variables

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

  // Middleware to parse JSON
app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
  })

  const port = 3000;
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  })