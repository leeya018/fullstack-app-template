const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
require("dotenv").config();

const db = require('./db')
const userRouter = require('./routes/user-router')



const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    
  });


const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))