const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there change twice' });
});

const PORT = process.env.PORT || 5000;// heroku env config port
app.listen(PORT);
