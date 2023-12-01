const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authUserRouter = require('./app/routes/authUserRoute');
const authCompanyRouter = require('./app/routes/authCompanyRoute');

const profileUserUserRouter = require('./app/routes/profileUserUserRoute');
const profileUserCompanyRouter = require('./app/routes/profileUserCompanyRoute');
const profileCompanyRouter = require('./app/routes/profileCompanyRoute');

const userPhotoRouter = require('./app/routes/userPhotoRoute');
const companyPhotoRouter = require('./app/routes/companyPhotoRoute');

const userExperienceRouter = require('./app/routes/userExperienceRoute');
const userEduRouter = require('./app/routes/userEduRoute');
const userLevelRouter = require('./app/routes/userLevelRoute');
const skillRouter = require('./app/routes/skillRoute');

const jobPostingUserRouter = require('./app/routes/jobPostingUserRoute');
const jobPostingCompanyRouter = require('./app/routes/jobPostingCompanyRoute');
const jobPostingDefaultRouter = require('./app/routes/jobPostingDefaultRoute');

const jobApplicationUserRouter = require('./app/routes/jobApplicationUserRoute');
const jobApplicationCompanyRouter = require('./app/routes/jobApplicationCompanyRoute');

const app = express();

app.use(cors())

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/authuser', authUserRouter);
app.use('/authcompany', authCompanyRouter);

app.use('/profileusers', profileUserUserRouter);
app.use('/profileusercompany', profileUserCompanyRouter);
app.use('/profilecompany', profileCompanyRouter);

app.use('/userphotos', userPhotoRouter);
app.use('/companyphotos', companyPhotoRouter);

app.use('/experiences', userExperienceRouter);
app.use('/usereducation', userEduRouter);
app.use('/userlevel', userLevelRouter);
app.use('/skill', skillRouter);

app.use('/jobuser', jobPostingUserRouter);
app.use('/jobcompany', jobPostingCompanyRouter);
app.use('/job', jobPostingDefaultRouter);

app.use('/applicationuser', jobApplicationUserRouter);
app.use('/applicationcompany', jobApplicationCompanyRouter);

app.listen(5000, () => {
  console.log('Server berjalan di http://localhost:5000');
});
