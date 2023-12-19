const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the client
const clientPath = path.resolve(__dirname, '../client/build');
app.use(express.static(clientPath));

// Serve the index.html for all other routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// API routes
app.get('/api/links', db.getLinks);
app.post('/api/links', db.createLink);
app.put('/api/links/:id', db.updateLink);
app.delete('/api/links/:id', db.deleteLink);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
