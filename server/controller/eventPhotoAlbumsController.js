const Photo = require('../models/eventPhotoAlbumModel');
const { containerClient } = require('../azureConfig/azureConfig');

async function handleImageUpload(req, res) {
    try {
        const { fileName, caption, fileType } = await extractMetadata(req.headers);

        // Upload image to Azure Blob Storage
        const imageUrl = await uploadImageStreamed(fileName, req);

        // Store metadata in MongoDB
        await storeMetadata(fileName, caption, fileType, imageUrl);

        res.status(201).json({ message: 'Image uploaded and metadata stored successfully', imageUrl });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getImage(req, res) {
    try {
        const photo = await Photo.findById(req.params.id);
        if (!photo) {
            return res.status(404).json({ error: 'Photo not found' });
        }
        res.status(200).json(photo);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function uploadImageStreamed(blobName, req) {
    const blobClient = containerClient.getBlockBlobClient(blobName);
    await blobClient.uploadData(req.file.buffer, { blobHTTPHeaders: { blobContentType: req.file.mimetype } });
    return blobClient.url;
}

async function storeMetadata(name, caption, fileType, imageUrl) {
    // Connect to MongoDB and store metadata
    const photo = new Photo({ title: name, imageUrl });
    await photo.save();
}

module.exports = {
    handleImageUpload,
    getImage
};
