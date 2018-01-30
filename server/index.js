const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/public`));




app.listen(port, () => console.log(`App listening on port ${port}`));
