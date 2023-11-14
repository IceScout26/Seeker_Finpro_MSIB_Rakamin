const express = require('express');
const authUserRouter = require('./app/routes/authUserRoute');
const authCompanyRouter = require('./app/routes/authCompanyRoute');
//require('dotenv').config(); sudah dites dalam index.js, nggak bisa bekerja

const app = express();

app.use(express.json());

app.use('/authuser', authUserRouter);
app.use('/authcompany', authCompanyRouter);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});