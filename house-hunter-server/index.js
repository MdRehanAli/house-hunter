const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Welcome to to House Hunter Server")
})

app.listen(port, (req, res) => {
    console.log(`House Hunter Server is Running on port ${port}`)
})