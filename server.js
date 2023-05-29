const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Array to store user details
const users = [];

// Login API endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
