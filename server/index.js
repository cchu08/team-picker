const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const nfl = require('../mock-data/nfl.json');
const nhl = require('../mock-data/nhl.json');
const nba = require('../mock-data/nba.json');
const favoritesList = require('../mock-data/favorites.json');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/public`));

app.get('*/sports', (req, res) => {
  const sports = [ nba, nfl, nhl ];
  res.status(200).send(sports);
})

app.get('*/favorites', (req, res) => {
  res.status(200).send(favoritesList);
})


app.listen(port, () => console.log(`App listening on port ${port}`));
