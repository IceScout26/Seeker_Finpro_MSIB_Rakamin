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
  ('majumundur@economic.com', 'majumundur', 'Maju Mundur', 'majumundur.png', 'Maju Mundur adalah perusahaan yang bergerak di bidang ekonomi', 'Jakarta'),
  ('edutech@edu.com', 'edutech', 'EduTech', 'edutech.png', 'EduTech adalah perusahaan yang bergerak di bidang edukasi', 'IKN'),
  ('microsoft@mail.com', 'microsoft', 'Microsoft', 'microsoft.png', 'Microsoft adalah perusahaan yang bergerak di bidang teknologi', 'New York'),
  ('foodish@gmail.com', 'foodish', 'Foodish', 'foodish.png', 'Foodish adalah perusahaan yang bergerak di bidang makanan', 'Lampung'),
  ('rakamin@gmail.com', 'rakamin', 'Rakamin', 'rakamin.png', 'Rakamin adalah perusahaan yang bergerak di bidang edukasi', 'Jakarta');

