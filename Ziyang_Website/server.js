const express = require('express');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(express.json());

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(HTTP_PORT, () => {
    console.log('Ready to handle requests on port ' + HTTP_PORT);
});