require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')


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

