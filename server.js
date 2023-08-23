const jsonServer = require('json-server');
const cors = require('cors');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const buildPath = path.join(__dirname, 'build');

const apiRouter = jsonServer.router('data/questions.json');
const middlewares = jsonServer.defaults();

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use(middlewares);

app.use('/api', apiRouter);

// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Showing that the server is online and running and listening for changes
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
});
