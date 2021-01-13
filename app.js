const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("Hello World from Rajeshwari Rudravaram's app!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})