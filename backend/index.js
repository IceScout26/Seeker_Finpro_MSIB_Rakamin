const express = require('express');
const morgan = require('morgan');
const authUserRouter = require('./app/routes/authUserRoute');
const authCompanyRouter = require('./app/routes/authCompanyRoute');
const skillRouter = require('./app/routes/skillRoute');
const profileUserRouter = require('./app/routes/profileUserRoute');
// const jobPostingCompanyRouter = require('./app/routes/jobPostingCompanyRoute');
// const jobPostingUserRouter = require('./app/routes/jobPostingUserRoute');
const userExperienceRouter = require('./app/routes/userExperienceRoute');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/authuser', authUserRouter);
app.use('/authcompany', authCompanyRouter);
app.use('/skill', skillRouter);
app.use('/profileusers', profileUserRouter);
app.use('/experiences', userExperienceRouter);

// app.use('/jobs/company', jobPostingCompanyRouter);
// app.use('/jobs/user', jobPostingUserRouter);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
