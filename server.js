const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(cors());
// app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/')));
app.use('/', express.static(path.join(__dirname, '/css')));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});