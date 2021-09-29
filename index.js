const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there change twice' });
});

app.listen(5000);
