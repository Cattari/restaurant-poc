const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { SERVER_PORT } = require('../constants');
const { 
  getRestaurantTables, 
  addRestaurantTable, 
  getOrders,
  getRestaurantTable,
  addOrder,
  deleteOrder,
} = require('../models');
const { getLocalIpAddress } = require('../helpers/networkInterfaces');

app.use(cors())
app.use(express.json())
app.use(express.static('./waiter-build'));

// viewed at http://{getLocalIpAddress()}:8000
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + './waiter-build/build/index.html'));
});

app.get('/api/login', function(req, res) {
  res.status(200).send({ result: 'success' });
});

app.post('/api/tables', async function(req, res) {
  const result = await addRestaurantTable(req.body)
  res.status(200).send({ result });
});

app.get('/api/tables', async function(req, res) {
  const result = await getRestaurantTables()
  res.status(200).send({ result });
});

app.get('/api/orders', async function(req, res) {
  const result = await getOrders()
  res.status(200).send({ result });
});

app.post('/api/orders', async function(req, res) {
  const result = await addOrder(req.body)
  console.log({ result })
  res.status(200).send({ result });
});

app.delete('/api/orders/:id', async function(req, res) {
  const result = await deleteOrder(req.params.id)
  res.status(200).send({ result });
});

app.get('/api/tables/:id', async function(req, res) {
  const tableId = req.params.id
  const result = await getRestaurantTable(tableId)

  res.status(200).send({ result });
});

app.listen(SERVER_PORT);

console.log('Local ip address', getLocalIpAddress())


