const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const {henry, srv1, kenny, aubrey} = require('./serverLinks.js')

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));


app.get('/product/:pid', (req, res) => {
  axios.get(`${srv1}/product/${req.params.pid}`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get product'));
});

app.post('/product', (req, res) => {
  axios.post(`${srv1}/product`, req.body)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not add product'));
});

app.put('/product/:pid', (req, res) => {
  axios.put(`${srv1}/product/${req.params.pid}`, req.body)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not update product'));
});

app.delete('/product/:pid', (req, res) => {
  axios.delete(`${srv1}/product/${req.params.pid}`)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not delete product'));
});

//CRUD for stores
app.get('/store/:sid', (req, res) => {
  axios.get(`${srv1}/store/${req.params.sid}`)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not get store'));
});

app.post('/store', (req, res) => {
  axios.post(`${srv1}/store`, req.body)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not add store'));
});

app.put('/store/:sid', (req, res) => {
  axios.put(`${srv1}/store/${req.params.sid}`, req.body)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not update store'));
});

app.delete('/store/:sid', (req, res) => {
  axios.delete(`${srv1}/store/${req.params.sid}`)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error('could not delete store'));
});

//CRUD for inventory
app.get('/nearbyWithInventory/:pid/:zip', (req, res) => {
  // const { pid, zip } = req.params;
  axios.get(`${srv1}/nearbyWithInventory/${req.params.pid}/${req.params.zip}`)
  .then((data) => res.status(200).send(data.data))
  .catch(() => console.error(`could not find store based on product ${req.params.pid} and zip ${req.params.zip}`));

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

