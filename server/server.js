// import dotenv in order to use environmetal variables
require('dotenv').config()      

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.set("strictQuery", false)
mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const treatmentsRouter = require('./routes/treatments')
app.use('/treatments', treatmentsRouter)                  //url: localhost:3000//treatments - anything that has this url or anythong after we go to our routes folder




app.listen(3000, () => console.log('Server Started'))