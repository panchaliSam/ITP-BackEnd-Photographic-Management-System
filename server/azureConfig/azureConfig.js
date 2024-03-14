require('dotenv').config()

const { BlobServiceClient } = require('@azure/storage-blob');

const connectionString = `DefaultEndpointsProtocol=https;AccountName=${process.env.ACCOUNT_NAME};AccountKey=${process.env.SAS_TOKEN};EndpointSuffix=core.windows.net`;

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(process.env.CONTAINER_NAME);

module.exports = { containerClient };

