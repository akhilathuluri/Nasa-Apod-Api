const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const API_KEY = 'hGqArteNouwBZwQS4GrSBwoa1CjKdUybNnyNPwiQ';

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// ...

// Route to fetch APOD data
app.get('/apod', (req, res) => {
   const { date } = req.query;
   const apiUrl = date ? `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}` : `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

   axios.get(apiUrl)
      .then(response => {
         const apodData = response.data;
         const apiLimit = response.headers['x-ratelimit-remaining'];

         // Add the API limit to the APOD data object
         apodData.apiLimit = apiLimit;

         res.json(apodData);
      })
      .catch(error => {
         console.error('Error:', error.message);
         res.status(500).json({ error: 'An error occurred' });
      });
});

// ...



// Serve the index page
app.get('/', (req, res) => {
   res.render('index');
});

// Serve the Nasa-Apod page
app.get('/Nasa-Apod', (req, res) => {
   const name = req.query.name;
   res.render('Nasa-Apod', { name });
});

// Serve the Nasa-Apod-Date page
app.get('/Nasa-Apod-Date', (req, res) => {
   const name = req.query.name;
   res.render('Nasa-Apod-Date', { name });
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
