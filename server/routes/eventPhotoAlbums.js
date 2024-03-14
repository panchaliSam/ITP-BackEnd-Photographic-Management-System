const express = require('express');
const router = express.Router();
const multer = require('multer');
const { 
    handleImageUpload,
    getImage
} = require('../controller/eventPhotoAlbumsController');

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route for uploading a photo
router.post('/photos', upload.single('photo'), handleImageUpload);
router.get('/photos/:id', getImage);

module.exports = router;
