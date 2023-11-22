const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authUserRouter = require('./app/routes/authUserRoute');
const authCompanyRouter = require('./app/routes/authCompanyRoute');
const skillRouter = require('./app/routes/skillRoute');
const profileUserRouter = require('./app/routes/profileUserRoute');
const userPhotoRouter = require('./app/routes/userPhotoRoute');
const userExperienceRouter = require('./app/routes/userExperienceRoute');
const userEduRouter = require('./app/routes/userEduRoute'); // Tambahkan rute userEdu
const jobPostingUserRouter = require('/app/routes/jobPostingUserRoute');
const jobPostingCompanyRouter = require('/app/routes/jobPostingCompanyRoute');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/authuser', authUserRouter);
app.use('/authcompany', authCompanyRouter);
app.use('/skill', skillRouter);
app.use('/profileusers', profileUserRouter);
app.use('/profilephotos', userPhotoRouter);
app.use('/experiences', userExperienceRouter);
app.use('/usereducation', userEduRouter); // Gunakan rute userEdu
app.use('/jobuser', jobPostingUserRouter);
app.use('/jobcompany', jobPostingCompanyRouter);

app.listen(5000, () => {
  console.log('Server berjalan di http://localhost:5000');
});
