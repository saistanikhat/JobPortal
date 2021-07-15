const path = require('path');
const axios = require('axios');
const cors = require('cors');
const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const jobRouter = require('./routes/job-router')
const app = express();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(buildPath));
app.use(cors());
app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/api', jobRouter);
app.get('/', (req, res) => {
  // res.send('Hello World!')
});

app.get('/fetchJobs', async (req, res) => {
  try {
    let { description = '', location = '', page = 1 } = req.query;

    description = description ? encodeURIComponent(description) : '';
    location = location ? encodeURIComponent(location) : '';
    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? '' : `&page=${page}`;
    }
    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while getting list of jobs.Try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
