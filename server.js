require('dotenv').config(); // Load env variables

const express = require('express');
const app = express();

const connectToDB = require('./Database/database');
connectToDB();

const bookRoutes = require('./Routes/book-routes');

// Use book routes
app.use('/api/books', bookRoutes);

const authRoutes = require('./Routes/auth-routes');

// Use auth routes
app.use('/api/auth', authRoutes);


  // Middleware to parse JSON
app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
  })


const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  })