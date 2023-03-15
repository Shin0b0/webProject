const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/recipe', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
  });
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
  

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
