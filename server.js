require('dotenv').config(); // Load env variables

const express = require('express');
const app = express();

const connectToDB = require('./Database/database');
connectToDB();


  // Middleware to parse JSON
app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
  })


const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  })