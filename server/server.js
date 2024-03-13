require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { BlobServiceClient } = require('@azure/storage-blob')

//azure storage
const accountName = process.env.ACCOUNT_NAME
const sasToken = process.env.SAS_TOKEN 
const containerName = process.env.CONTAINER_NAME

const BlobServiceClient = new BlobServiceClient('https://${accontName}.blob.core.windows.net/?${sasToken}')
const containerClient = BlobServiceClient.getContainerClass(containerName)

// express app
const app = express()

// middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to photographic app'})
  })

// routes


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    console.log('test')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

