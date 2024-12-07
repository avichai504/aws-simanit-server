var express = require('express')
var path = require('path')

var app = express()

// Middleware for parsing JSON and serving static files
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Root route serving the index.html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// API endpoint to reverse the input text
app.post('/api/reverse', (req, res) => {
  const { input } = req.body
  if (!input) {
    return res.status(400).json({ error: 'Input is required' })
  }
  const reversed = input.split('').reverse().join('')
  res.json({ reversed })
})

// Start the server on port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

module.exports = app
