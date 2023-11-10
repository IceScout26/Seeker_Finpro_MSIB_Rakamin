const express = require('express');
const app = express();
const authUserRouter = require('./app/routes/authUserRoute');

app.use(express.json());
app.use('/authuser', authUserRouter);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});