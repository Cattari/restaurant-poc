const { getLocalIpAddress } = require('./helpers/networkInterfaces')
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { SERVER_PORT } = require('../constants');

app.use(cors())
app.use(express.static('./waiter-build'));

// viewed at http://{getLocalIpAddress()}:8000
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + './waiter-build/build/index.html'));
});

app.get('/api/login', function(req, res) {
  res.status(200).send({ result: 'success' });
});

app.listen(SERVER_PORT);

console.log('Local ip address', getLocalIpAddress())


