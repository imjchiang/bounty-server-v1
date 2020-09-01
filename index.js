const express = require('express')
const app = express()

app.get((req, res)=> {
    res.send('You\'ve hit the home route of the Mongo Bounty Hunter server!')
})

app.listen(8000)