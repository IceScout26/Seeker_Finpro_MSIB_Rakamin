INSERT INTO education (name, gpa, major, start, "end")
VALUES
  ('Universitas Indonesia', 3.9, 'Teknik Informatika', '2010-08-01', '2014-08-01'),
  ('Institut Teknologi Bandung', 3.8, 'Sistem Informasi', '2012-08-01', '2016-08-01'),
  ('Universitas Gadjah Mada', 3.7, 'Akuntansi', '2014-08-01', '2018-08-01'),
  ('Universitas Airlangga', 3.6, 'Hukum', '2016-08-01', '2020-08-01'),
  ('Universitas Diponegoro', 3.5, 'Kedokteran', '2018-08-01', '2022-08-01');

INSERT INTO experience (company_name, start, "end", position)
VALUES
  ('Google', '2021-08-01', '2023-11-10', 'Software Engineer'),
  ('Microsoft', '2019-06-01', '2021-07-31', 'Software Engineer Intern'),
  ('Amazon', '2018-05-01', '2019-04-30', 'Software Development Engineer Intern'),
  ('Facebook', '2017-04-01', '2018-03-31', 'Software Engineering Intern'),
  ('Twitter', '2016-03-01', '2017-02-28', 'Software Engineering Intern');

INSERT INTO level (level)
VALUES
  ('Beginner'),
  ('Intermediate'),
  ('Advanced'),
  ('Expert'),
  ('Master');

INSERT INTO company (email, password, name, profile_picture, description, city)
VALUES
  ('majumundur@economic.com', '$2a$12$t9/.IrP4B7LLrhq8/Yzwb.rMal0x/unFP49oeeXNhGGF4em2/Brsq', 'Maju Mundur', 'majumundur.png', 'Maju Mundur adalah perusahaan yang bergerak di bidang ekonomi', 'Jakarta'),
  ('edutech@edu.com', '$2a$12$Z7O.P.ZS/Lm2DU69vr1HyOyE5c5IpYjkKJPieJotKvDap6dQpfQbC', 'EduTech', 'edutech.png', 'EduTech adalah perusahaan yang bergerak di bidang edukasi', 'IKN'),
  ('microsoft@mail.com', '$2a$12$8H5FoKo4STys4EywkHvQs.8v7mCfVIc45MmLAk42rN26XJsgyMkj2', 'Microsoft', 'microsoft.png', 'Microsoft adalah perusahaan yang bergerak di bidang teknologi', 'New York'),
  ('foodish@gmail.com', '$2a$12$tX76se7Sftr7G30JtGvi7.0LvnpjpqdBY1MqfBhJ56uc4D2Rs3E0e', 'Foodish', 'foodish.png', 'Foodish adalah perusahaan yang bergerak di bidang makanan', 'Lampung'),
  ('rakamin@gmail.com', '$2a$12$l0XDle5NSOVOl.TRwqgDqe.G9cv.LPBOha4RgZtKFovJEHvyQGBoS', 'Rakamin', 'rakamin.png', 'Rakamin adalah perusahaan yang bergerak di bidang edukasi', 'Jakarta');
  -- ('majumundur@economic.com', 'majumundur', 'Maju Mundur', 'majumundur.png', 'Maju Mundur adalah perusahaan yang bergerak di bidang ekonomi', 'Jakarta'),
  -- ('edutech@edu.com', 'edutech', 'EduTech', 'edutech.png', 'EduTech adalah perusahaan yang bergerak di bidang edukasi', 'IKN'),
  -- ('microsoft@mail.com', 'microsoft', 'Microsoft', 'microsoft.png', 'Microsoft adalah perusahaan yang bergerak di bidang teknologi', 'New York'),
  -- ('foodish@gmail.com', 'foodish', 'Foodish', 'foodish.png', 'Foodish adalah perusahaan yang bergerak di bidang makanan', 'Lampung'),
  -- ('rakamin@gmail.com', 'rakamin', 'Rakamin', 'rakamin.png', 'Rakamin adalah perusahaan yang bergerak di bidang edukasi', 'Jakarta');

INSERT INTO job (company_id, title, description, expertise, salary, due_date, status)
VALUES
  (1, 'Software Engineer', 'Developing and maintaining software applications', 'Software Development', 80000, '2023-12-31', 'Open'),
  (2, 'Data Analyst', 'Analyzing and interpreting complex data sets', 'Data Analysis', 60000, '2023-11-30', 'Open'),
  (3, 'Marketing Specialist', 'Creating and executing marketing campaigns', 'Marketing', 70000, '2023-12-15', 'Close'),
  (1, 'Network Administrator', 'Managing and maintaining network infrastructure', 'Network Administration', 75000, '2023-12-20', 'Close');

INSERT INTO skill (skill)
VALUES
  ('Frontend'),
  ('Backend'),
  ('Fullstack'),
  ('Mobile'),
  ('Desktop'),
  ('Web'),
  ('Database'),
  ('Cloud'),
  ('DevOps'),
  ('UI/UX');

INSERT INTO "user" (email, password, name, profile_picture, birthday, description, cv, city, education_id, experience_id, skill_id, level_id)
VALUES
  -- ('aselole@gmail.com','scipio','Aceng','aceng.png','1996-08-01','I was a tech enthusias','aceng.pdf','Jakarta',1,1,1,1),
  -- ('budibrodi@gmail.com','12678kio','Budi','budi.png','1997-08-01','I was a tech enthusias','budi.pdf','Semarang',2,2,2,2),
  -- ('andiwudi@gmail.com','skilogoceng','Andi','andi.png','1998-08-01','I was a tech enthusias','andi.pdf','Bandung',3,3,3,3),
  -- ('waluyo@gmail.com','waluyowaluyo','Waluyo','waluyo.png','1999-08-01','I was a tech enthusias','waluyo.pdf','Surabaya',4,4,4,4),
  -- ('arnold@gmail.com','arnoldarnold','Arnold','arnold.png','2000-08-01','I was a tech enthusias','arnold.pdf','Bali',5,5,5,5);
  ('aselole@gmail.com','$2a$12$cuIrloOo7C8TrVPHWQASP.V6dIgjmqVzgoyyNPOBBGhleJEnvuDlC','Aceng','aceng.png','1996-08-01','I was a tech enthusias','aceng.pdf','Jakarta',1,1,1,1),
  ('budibrodi@gmail.com','$2a$12$NaFLm1zdc0WQjsJT/gWmi.0T0zJBpVUkIWD.BZYrYvPoR.Whkh8MK','Budi','budi.png','1997-08-01','I was a tech enthusias','budi.pdf','Semarang',2,2,2,2),
  ('andiwudi@gmail.com','$2a$12$8c6lbzsxZAiG5nXkMJ5n4uZAJKuzMPBZmGzYTMrc8dS5saauWZ85u','Andi','andi.png','1998-08-01','I was a tech enthusias','andi.pdf','Bandung',3,3,3,3),
  ('waluyo@gmail.com','$2a$12$/JaDpl6QK3TRqS.oSvVV7utq3Em/fBL3lg6ofoJefQIB3IaITc5i2','Waluyo','waluyo.png','1999-08-01','I was a tech enthusias','waluyo.pdf','Surabaya',4,4,4,4),
  ('arnold@gmail.com','$2a$12$RXQNWEuM/PSXlgydxwrT0.JPE6vYp6zW1oxT3r26MFmRbm85locWS','Arnold','arnold.png','2000-08-01','I was a tech enthusias','arnold.pdf','Bali',5,5,5,5);


INSERT INTO application (user_id, job_id, status)
VALUES
  (1, 1, 'Accepted'),
  (2, 2, 'Decline'),
  (3, 3, 'Waiting'),
  (4, 4, 'Accepted'),
  (5, 1, 'Decline');
