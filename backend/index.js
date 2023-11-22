const express = require('express');
const morgan = require('morgan');
const authUserRouter = require('./app/routes/authUserRoute');
const authCompanyRouter = require('./app/routes/authCompanyRoute');
const skillRouter = require('./app/routes/skillRoute');
const profileUserRouter = require('./app/routes/profileUserRoute');
const userPhotoRouter = require('./app/routes/userPhotoRoute');
const userExperienceRouter = require('./app/routes/userExperienceRoute');
var cors = require('cors')
var bodyParser = require('body-parser');


const app = express();

app.use(cors())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/authuser', authUserRouter);
app.use('/authcompany', authCompanyRouter);
app.use('/skill', skillRouter);
app.use('/profileusers', profileUserRouter);
app.use('/profilephotos', userPhotoRouter);
app.use('/experiences', userExperienceRouter);

app.listen(5000, () => {
  console.log('Server berjalan di http://localhost:5000');
});
