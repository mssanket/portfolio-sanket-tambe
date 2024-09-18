const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 5000;
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host (usually localhost)
  user: 'root',      // Your MySQL username
  password: 'mysql@123', // Your MySQL password
  database: 'portfolio', // Database name
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Route to handle form submission
app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;


  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Failed to submit form');
    } else {
      res.status(200).send('Form submitted successfully');
      io.emit('newContact', { name, email, message })
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
