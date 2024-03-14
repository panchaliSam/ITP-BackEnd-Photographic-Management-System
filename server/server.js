require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const eventPhotoRoutes = require('./routes/eventPhotoAlbums');

// express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to photographic app'})
})

// routes
app.use('/api/eventPhotoAlbum', eventPhotoRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database');

    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });


module.exports = app;
