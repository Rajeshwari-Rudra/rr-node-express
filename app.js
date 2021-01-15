const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("Hello World Rajeshwari Rudravaram's app!")
})
app.get('/about', (req, res) => {
    res.send(' This app is an example of node express app.')
  })
app.get('/contact', (req, res) => {
    res.send('If you would like to contact me,please email me at S538361@nwmissouri.edu')
  })
app.get('/help', (req, res) => {
    res.send(" You have requested the help page of this app, I'm Rajeshwari Rudravaram will help you soon.")
  })
app.get('/help/:topic', (req, res) => {
    res.send(` You have requested the help ${req.params.topic} page! `)
  })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    
})