--
-- PostgreSQL database dump
--

-- Dumped from database version 12.18
-- Dumped by pg_dump version 12.18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: application; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.application (
    id integer NOT NULL,
    job_id integer,
    user_id integer,
    status character varying(255)
);


ALTER TABLE public.application OWNER TO nomadean;

--
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.application_id_seq OWNER TO nomadean;

--
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- Name: company; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.company (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    name character varying(255),
    profile_picture character varying(255),
    description text,
    city character varying(255)
);


ALTER TABLE public.company OWNER TO nomadean;

--
-- Name: company_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.company_id_seq OWNER TO nomadean;

--
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.company_id_seq OWNED BY public.company.id;


--
-- Name: education; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.education (
    id integer NOT NULL,
    name character varying,
    gpa numeric,
    major character varying(255),
    start date,
    "end" date
);


ALTER TABLE public.education OWNER TO nomadean;

--
-- Name: education_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.education_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.education_id_seq OWNER TO nomadean;

--
-- Name: education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.education_id_seq OWNED BY public.education.id;


--
-- Name: experience; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.experience (
    id integer NOT NULL,
    company_name character varying(255),
    start date,
    "end" date,
    "position" character varying(255)
);


ALTER TABLE public.experience OWNER TO nomadean;

--
-- Name: experience_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.experience_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.experience_id_seq OWNER TO nomadean;

--
-- Name: experience_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.experience_id_seq OWNED BY public.experience.id;


--
-- Name: job; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.job (
    id integer NOT NULL,
    company_id integer,
    title character varying(255),
    description text,
    expertise character varying(255),
    salary integer,
    due_date date,
    status character varying(255)
);


ALTER TABLE public.job OWNER TO nomadean;

--
-- Name: job_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.job_id_seq OWNER TO nomadean;

--
-- Name: job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.job_id_seq OWNED BY public.job.id;


--
-- Name: level; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.level (
    id integer NOT NULL,
    level character varying(255)
);


ALTER TABLE public.level OWNER TO nomadean;

--
-- Name: level_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.level_id_seq OWNER TO nomadean;

--
-- Name: level_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.level_id_seq OWNED BY public.level.id;


--
-- Name: skill; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public.skill (
    id integer NOT NULL,
    skill character varying(255)
);


ALTER TABLE public.skill OWNER TO nomadean;

--
-- Name: skill_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_id_seq OWNER TO nomadean;

--
-- Name: skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.skill_id_seq OWNED BY public.skill.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: nomadean
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    name character varying(255),
    profile_picture character varying(255),
    birthday date,
    description text,
    cv character varying(255),
    city character varying(255),
    education_id integer,
    experience_id integer,
    skill_id integer,
    level_id integer
);


ALTER TABLE public."user" OWNER TO nomadean;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: nomadean
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO nomadean;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nomadean
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: application id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- Name: company id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.company ALTER COLUMN id SET DEFAULT nextval('public.company_id_seq'::regclass);


--
-- Name: education id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.education ALTER COLUMN id SET DEFAULT nextval('public.education_id_seq'::regclass);


--
-- Name: experience id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.experience ALTER COLUMN id SET DEFAULT nextval('public.experience_id_seq'::regclass);


--
-- Name: job id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.job ALTER COLUMN id SET DEFAULT nextval('public.job_id_seq'::regclass);


--
-- Name: level id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.level ALTER COLUMN id SET DEFAULT nextval('public.level_id_seq'::regclass);


--
-- Name: skill id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.skill ALTER COLUMN id SET DEFAULT nextval('public.skill_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: application; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.application VALUES (11, 33, 42, 'Decline');
INSERT INTO public.application VALUES (12, 34, 43, 'Waiting');
INSERT INTO public.application VALUES (13, 35, 44, 'Accepted');
INSERT INTO public.application VALUES (14, 36, 45, 'Decline');
INSERT INTO public.application VALUES (15, 45, 45, 'Accepted');


--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.company VALUES (67, 'admincompany@gmail.com', '$2b$10$o1a8bW3V990xusKc.xJr5OznxNlDDVMu0IyX4eJmc8jarVeEGTsoK', 'admincompany', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', 'No description available.', 'Unknown City');
INSERT INTO public.company VALUES (51, 'rakamin@gmail.com', '$2a$12$l0XDle5NSOVOl.TRwqgDqe.G9cv.LPBOha4RgZtKFovJEHvyQGBoS', 'Rakamin', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', 'Rakamin adalah perusahaan yang bergerak di bidang edukasi', 'Jakarta');
INSERT INTO public.company VALUES (47, 'majumundur@economic.com', '$2a$12$t9/.IrP4B7LLrhq8/Yzwb.rMal0x/unFP49oeeXNhGGF4em2/Brsq', 'Maju Mundur', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', 'Maju Mundur adalah perusahaan yang bergerak di bidang ekonomi', 'Jakarta');
INSERT INTO public.company VALUES (48, 'edutech@edu.com', '$2a$12$Z7O.P.ZS/Lm2DU69vr1HyOyE5c5IpYjkKJPieJotKvDap6dQpfQbC', 'EduTech', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', 'EduTech adalah perusahaan yang bergerak di bidang edukasi', 'IKN');
INSERT INTO public.company VALUES (68, 'admin2@gmail.com', '$2b$10$qIzIpI4rne./jVpolEHYkOwnBNgpKMp/WO.khFmVwZiELFRtfLPNO', 'admin2', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', 'No description available.', 'Unknown City');
INSERT INTO public.company VALUES (49, 'microsoft@mail.com', '$2a$12$8H5FoKo4STys4EywkHvQs.8v7mCfVIc45MmLAk42rN26XJsgyMkj2', 'Microsoft', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', 'Microsoft adalah perusahaan yang bergerak di bidang teknologi', 'New York');
INSERT INTO public.company VALUES (50, 'foodish@gmail.com', '$2a$12$tX76se7Sftr7G30JtGvi7.0LvnpjpqdBY1MqfBhJ56uc4D2Rs3E0e', 'Foodish', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', 'Foodish adalah perusahaan yang bergerak di bidang makanan', 'Lampung');


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.education VALUES (71, 'Universitas Indonesia', 3.9, 'Teknik Informatika', '2010-08-01', '2014-08-01');
INSERT INTO public.education VALUES (72, 'Institut Teknologi Bandung', 3.8, 'Sistem Informasi', '2012-08-01', '2016-08-01');
INSERT INTO public.education VALUES (73, 'Universitas Gadjah Mada', 3.7, 'Akuntansi', '2014-08-01', '2018-08-01');
INSERT INTO public.education VALUES (74, 'Universitas Airlangga', 3.6, 'Hukum', '2016-08-01', '2020-08-01');
INSERT INTO public.education VALUES (75, 'Universitas Diponegoro', 3.5, 'Kedokteran', '2018-08-01', '2022-08-01');
INSERT INTO public.education VALUES (81, 'Universitas Indonesia', 3.9, 'Teknik Informatika', '2010-08-01', '2014-08-01');
INSERT INTO public.education VALUES (82, 'Institut Teknologi Bandung', 3.8, 'Sistem Informasi', '2012-08-01', '2016-08-01');
INSERT INTO public.education VALUES (83, 'Universitas Gadjah Mada', 3.7, 'Akuntansi', '2014-08-01', '2018-08-01');
INSERT INTO public.education VALUES (84, 'Universitas Airlangga', 3.6, 'Hukum', '2016-08-01', '2020-08-01');
INSERT INTO public.education VALUES (85, 'Universitas Diponegoro', 3.5, 'Kedokteran', '2018-08-01', '2022-08-01');
INSERT INTO public.education VALUES (86, 'Universitas Indonesia', 3.9, 'Teknik Informatika', '2010-08-01', '2014-08-01');
INSERT INTO public.education VALUES (87, 'Institut Teknologi Bandung', 3.8, 'Sistem Informasi', '2012-08-01', '2016-08-01');
INSERT INTO public.education VALUES (88, 'Universitas Gadjah Mada', 3.7, 'Akuntansi', '2014-08-01', '2018-08-01');
INSERT INTO public.education VALUES (89, 'Universitas Airlangga', 3.6, 'Hukum', '2016-08-01', '2020-08-01');
INSERT INTO public.education VALUES (90, 'Universitas Diponegoro', 3.5, 'Kedokteran', '2018-08-01', '2022-08-01');
INSERT INTO public.education VALUES (36, 'Universitas Indonesia', 3.9, 'Teknik Informatika', '2010-08-01', '2014-08-01');
INSERT INTO public.education VALUES (37, 'Institut Teknologi Bandung', 3.8, 'Sistem Informasi', '2012-08-01', '2016-08-01');
INSERT INTO public.education VALUES (38, 'Universitas Gadjah Mada', 3.7, 'Akuntansi', '2014-08-01', '2018-08-01');
INSERT INTO public.education VALUES (39, 'Universitas Airlangga', 3.6, 'Hukum', '2016-08-01', '2020-08-01');
INSERT INTO public.education VALUES (40, 'Universitas Diponegoro', 3.5, 'Kedokteran', '2018-08-01', '2022-08-01');


--
-- Data for Name: experience; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.experience VALUES (66, 'Google', '2021-08-01', '2023-11-10', 'Software Engineer');
INSERT INTO public.experience VALUES (67, 'Microsoft', '2019-06-01', '2021-07-31', 'Software Engineer Intern');
INSERT INTO public.experience VALUES (68, 'Amazon', '2018-05-01', '2019-04-30', 'Software Development Engineer Intern');
INSERT INTO public.experience VALUES (69, 'Facebook', '2017-04-01', '2018-03-31', 'Software Engineering Intern');
INSERT INTO public.experience VALUES (70, 'Twitter', '2016-03-01', '2017-02-28', 'Software Engineering Intern');


--
-- Data for Name: job; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.job VALUES (33, 47, 'Software Engineer', 'Developing and maintaining software applications', 'Software Development', 80000, '2023-12-31', 'Open');
INSERT INTO public.job VALUES (34, 48, 'Data Analyst', 'Analyzing and interpreting complex data sets', 'Data Analysis', 60000, '2023-11-30', 'Open');
INSERT INTO public.job VALUES (35, 49, 'Marketing Specialist', 'Creating and executing marketing campaigns', 'Marketing', 70000, '2023-12-15', 'Close');
INSERT INTO public.job VALUES (36, 50, 'Network Administrator', 'Managing and maintaining network infrastructure', 'Network Administration', 75000, '2023-12-20', 'Close');
INSERT INTO public.job VALUES (42, 68, 'Project Manager', 'Sebagai Project Manager, Anda akan bertanggung jawab atas perencanaan, pengelolaan, dan penyelesaian proyek sesuai dengan batas waktu, anggaran, dan spesifikasi yang ditetapkan. Anda akan memimpin tim dalam rangka memastikan pencapaian tujuan proyek secara efisien.', 'Leadership, Time Management', 15000000, '2023-12-28', 'Open');
INSERT INTO public.job VALUES (43, 68, 'Quality Assurance', 'Sebagai QA Specialist, Anda akan bertanggung jawab untuk memastikan bahwa produk atau layanan yang dihasilkan memenuhi standar kualitas yang ditetapkan. Anda akan bekerja secara aktif dengan tim pengembangan atau produksi untuk memastikan bahwa proses dan produk sesuai dengan spesifikasi yang ditetapkan', 'Postman', 8000000, '2023-12-20', 'Open');
INSERT INTO public.job VALUES (44, 68, 'UI UX', 'Sebagai UI/UX Designer, Anda akan bertanggung jawab dalam merancang pengalaman pengguna yang intuitif dan menarik untuk produk digital kami. Anda akan bekerja sama dengan tim pengembangan dan pemangku kepentingan untuk memastikan produk yang dihasilkan memiliki tampilan visual yang menarik dan fungsionalitas yang memenuhi kebutuhan pengguna.', 'Figma, Canva, Adobe Flash', 8000000, '2023-12-30', 'Open');
INSERT INTO public.job VALUES (45, 67, 'Designer', 'Sebagai Desainer Grafis, Anda akan bertanggung jawab dalam menciptakan materi visual yang memukau dan berfungsi untuk berbagai keperluan pemasaran dan komunikasi. Anda akan menggunakan kreativitas dan keahlian desain untuk menghasilkan solusi visual yang memenuhi kebutuhan perusahaan atau klien.', 'Adobe Photoshop, Illustrator', 9000000, '2024-02-09', 'Open');
INSERT INTO public.job VALUES (46, 67, 'Data Scientist', 'Sebagai Data Scientist, Anda akan menggunakan keahlian analisis data dan pemodelan statistik untuk mengeksplorasi data, mengidentifikasi tren, dan memberikan wawasan yang berharga untuk mendukung pengambilan keputusan bisnis. Anda akan bekerja dengan tim lintas disiplin untuk menerapkan solusi analitis yang dapat meningkatkan kinerja operasional atau strategi bisnis.', 'Python, R, atau SQL', 15000000, '2024-02-09', 'Open');
INSERT INTO public.job VALUES (47, 67, 'Accounting', 'Sebagai seorang akuntan, tugas utama Anda adalah mengelola dan merawat catatan keuangan. Ini melibatkan pencatatan transaksi keuangan, analisis data, dan penyusunan laporan keuangan yang akurat. Anda akan bekerja dengan detail setiap transaksi, memastikan kepatuhan terhadap standar akuntansi yang berlaku, dan mempersiapkan laporan bulanan, kuartalan, serta tahunan untuk keperluan audit dan perpajakan.', 'Microsoft Excel, Microsoft Word', 5000000, '2023-12-22', 'Open');
INSERT INTO public.job VALUES (48, 67, 'Front End', 'Pengembangan frontend melibatkan penggunaan bahasa pemrograman seperti HTML (HyperText Markup Language) untuk menentukan struktur halaman web, CSS (Cascading Style Sheets) untuk menambahkan gaya dan desain, serta JavaScript untuk menambahkan interaktivitas dan fungsi ke dalam halaman web.', 'Javascript', 1000000, '2023-12-28', 'Open');
INSERT INTO public.job VALUES (49, 67, 'test', 'test', 'test', 123, '2023-12-02', 'Open');
INSERT INTO public.job VALUES (50, 67, 'Test 12345', 'Ini adalah isi description', 'js', 10000000, '2023-12-16', 'Open');


--
-- Data for Name: level; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.level VALUES (66, 'Beginner');
INSERT INTO public.level VALUES (67, 'Intermediate');
INSERT INTO public.level VALUES (68, 'Advanced');
INSERT INTO public.level VALUES (69, 'Expert');
INSERT INTO public.level VALUES (70, 'Master');


--
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public.skill VALUES (101, 'Frontend');
INSERT INTO public.skill VALUES (102, 'Backend');
INSERT INTO public.skill VALUES (103, 'Fullstack');
INSERT INTO public.skill VALUES (104, 'Mobile');
INSERT INTO public.skill VALUES (105, 'Desktop');
INSERT INTO public.skill VALUES (106, 'Web');
INSERT INTO public.skill VALUES (107, 'Database');
INSERT INTO public.skill VALUES (108, 'Cloud');
INSERT INTO public.skill VALUES (109, 'DevOps');
INSERT INTO public.skill VALUES (110, 'UI/UX');


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: nomadean
--

INSERT INTO public."user" VALUES (43, 'budibrodi@gmail.com', '$2a$12$NaFLm1zdc0WQjsJT/gWmi.0T0zJBpVUkIWD.BZYrYvPoR.Whkh8MK', 'Budi Sucipto', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', '1997-08-01', 'I was a tech enthusias', 'budi.pdf', 'Semarang', 72, 67, 102, 67);
INSERT INTO public."user" VALUES (45, 'waluyo@gmail.com', '$2a$12$/JaDpl6QK3TRqS.oSvVV7utq3Em/fBL3lg6ofoJefQIB3IaITc5i2', 'Willy Waluyo', 'https://drive.google.com/file/d/16IKyBJXRJqmzEBELE1mTVYRd_1uB-kKD/view?usp=drive_link.png', '1999-08-01', 'I was a tech enthusias', 'waluyo.pdf', 'Surabaya', 74, 69, 104, 69);
INSERT INTO public."user" VALUES (42, 'aselole@gmail.com', '$2a$12$cuIrloOo7C8TrVPHWQASP.V6dIgjmqVzgoyyNPOBBGhleJEnvuDlC', 'Andi Abadi', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', '1996-08-01', 'I was a tech enthusias', 'aceng.pdf', 'Jakarta', 71, 66, 101, 66);
INSERT INTO public."user" VALUES (44, 'andiwudi@gmail.com', '$2a$12$8c6lbzsxZAiG5nXkMJ5n4uZAJKuzMPBZmGzYTMrc8dS5saauWZ85u', 'Muhammad Sumbul', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', '1998-08-01', 'I was a tech enthusias', 'andi.pdf', 'Bandung', 73, 68, 103, 68);
INSERT INTO public."user" VALUES (46, 'arnold@gmail.com', '$2a$12$RXQNWEuM/PSXlgydxwrT0.JPE6vYp6zW1oxT3r26MFmRbm85locWS', 'Leonardo Jhonson', 'https://drive.google.com/file/d/1HMaaG5rPQe22vO8NYDSd8al4zTP2cowY/view?usp=drive_link.png', '2000-08-01', 'I was a tech enthusias', 'arnold.pdf', 'Bali', 75, 70, 105, 70);


--
-- Name: application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.application_id_seq', 16, true);


--
-- Name: company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.company_id_seq', 68, true);


--
-- Name: education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.education_id_seq', 90, true);


--
-- Name: experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.experience_id_seq', 85, true);


--
-- Name: job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.job_id_seq', 50, true);


--
-- Name: level_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.level_id_seq', 85, true);


--
-- Name: skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.skill_id_seq', 140, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nomadean
--

SELECT pg_catalog.setval('public.user_id_seq', 51, true);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: education education_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_pkey PRIMARY KEY (id);


--
-- Name: experience experience_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.experience
    ADD CONSTRAINT experience_pkey PRIMARY KEY (id);


--
-- Name: job job_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_pkey PRIMARY KEY (id);


--
-- Name: level level_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);


--
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: application application_job_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.job(id);


--
-- Name: application application_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: job job_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.company(id);


--
-- Name: user user_education_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_education_id_fkey FOREIGN KEY (education_id) REFERENCES public.education(id);


--
-- Name: user user_experience_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_experience_id_fkey FOREIGN KEY (experience_id) REFERENCES public.experience(id);


--
-- Name: user user_level_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_level_id_fkey FOREIGN KEY (level_id) REFERENCES public.level(id);


--
-- Name: user user_skill_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nomadean
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_skill_id_fkey FOREIGN KEY (skill_id) REFERENCES public.skill(id);


--
-- Name: TABLE application; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.application TO nomadean_job_seeker;


--
-- Name: COLUMN application.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.application TO nomadean;
GRANT ALL(id) ON TABLE public.application TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.application TO nomadean_job_seeker;


--
-- Name: COLUMN application.job_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(job_id) ON TABLE public.application TO nomadean;
GRANT ALL(job_id) ON TABLE public.application TO nomadean_nomadean;
GRANT ALL(job_id) ON TABLE public.application TO nomadean_job_seeker;


--
-- Name: COLUMN application.user_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(user_id) ON TABLE public.application TO nomadean;
GRANT ALL(user_id) ON TABLE public.application TO nomadean_nomadean;
GRANT ALL(user_id) ON TABLE public.application TO nomadean_job_seeker;


--
-- Name: COLUMN application.status; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(status) ON TABLE public.application TO nomadean;
GRANT ALL(status) ON TABLE public.application TO nomadean_nomadean;
GRANT ALL(status) ON TABLE public.application TO nomadean_job_seeker;


--
-- Name: TABLE company; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: COLUMN company.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.company TO nomadean WITH GRANT OPTION;
GRANT ALL(id) ON TABLE public.company TO nomadean_nomadean WITH GRANT OPTION;
GRANT ALL(id) ON TABLE public.company TO nomadean_job_seeker WITH GRANT OPTION;


--
-- Name: COLUMN company.email; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(email) ON TABLE public.company TO nomadean WITH GRANT OPTION;
GRANT ALL(email) ON TABLE public.company TO nomadean_nomadean WITH GRANT OPTION;
GRANT ALL(email) ON TABLE public.company TO nomadean_job_seeker WITH GRANT OPTION;


--
-- Name: COLUMN company.password; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(password) ON TABLE public.company TO nomadean;
GRANT ALL(password) ON TABLE public.company TO nomadean_nomadean;
GRANT ALL(password) ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: COLUMN company.name; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(name) ON TABLE public.company TO nomadean;
GRANT ALL(name) ON TABLE public.company TO nomadean_nomadean;
GRANT ALL(name) ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: COLUMN company.profile_picture; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(profile_picture) ON TABLE public.company TO nomadean;
GRANT ALL(profile_picture) ON TABLE public.company TO nomadean_nomadean;
GRANT ALL(profile_picture) ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: COLUMN company.description; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(description) ON TABLE public.company TO nomadean;
GRANT ALL(description) ON TABLE public.company TO nomadean_nomadean;
GRANT ALL(description) ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: COLUMN company.city; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(city) ON TABLE public.company TO nomadean;
GRANT ALL(city) ON TABLE public.company TO nomadean_nomadean;
GRANT ALL(city) ON TABLE public.company TO nomadean_job_seeker;


--
-- Name: TABLE education; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.education TO nomadean;
GRANT ALL(id) ON TABLE public.education TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education.name; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(name) ON TABLE public.education TO nomadean;
GRANT ALL(name) ON TABLE public.education TO nomadean_nomadean;
GRANT ALL(name) ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education.gpa; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(gpa) ON TABLE public.education TO nomadean;
GRANT ALL(gpa) ON TABLE public.education TO nomadean_nomadean;
GRANT ALL(gpa) ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education.major; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(major) ON TABLE public.education TO nomadean;
GRANT ALL(major) ON TABLE public.education TO nomadean_nomadean;
GRANT ALL(major) ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education.start; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(start) ON TABLE public.education TO nomadean;
GRANT ALL(start) ON TABLE public.education TO nomadean_nomadean;
GRANT ALL(start) ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: COLUMN education."end"; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL("end") ON TABLE public.education TO nomadean;
GRANT ALL("end") ON TABLE public.education TO nomadean_nomadean;
GRANT ALL("end") ON TABLE public.education TO nomadean_job_seeker;


--
-- Name: TABLE experience; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: COLUMN experience.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.experience TO nomadean;
GRANT ALL(id) ON TABLE public.experience TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: COLUMN experience.company_name; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(company_name) ON TABLE public.experience TO nomadean;
GRANT ALL(company_name) ON TABLE public.experience TO nomadean_nomadean;
GRANT ALL(company_name) ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: COLUMN experience.start; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(start) ON TABLE public.experience TO nomadean;
GRANT ALL(start) ON TABLE public.experience TO nomadean_nomadean;
GRANT ALL(start) ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: COLUMN experience."end"; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL("end") ON TABLE public.experience TO nomadean;
GRANT ALL("end") ON TABLE public.experience TO nomadean_nomadean;
GRANT ALL("end") ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: COLUMN experience."position"; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL("position") ON TABLE public.experience TO nomadean;
GRANT ALL("position") ON TABLE public.experience TO nomadean_nomadean;
GRANT ALL("position") ON TABLE public.experience TO nomadean_job_seeker;


--
-- Name: TABLE job; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.job TO nomadean;
GRANT ALL(id) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.company_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(company_id) ON TABLE public.job TO nomadean;
GRANT ALL(company_id) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(company_id) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.title; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(title) ON TABLE public.job TO nomadean;
GRANT ALL(title) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(title) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.description; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(description) ON TABLE public.job TO nomadean;
GRANT ALL(description) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(description) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.expertise; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(expertise) ON TABLE public.job TO nomadean;
GRANT ALL(expertise) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(expertise) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.salary; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(salary) ON TABLE public.job TO nomadean;
GRANT ALL(salary) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(salary) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.due_date; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(due_date) ON TABLE public.job TO nomadean;
GRANT ALL(due_date) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(due_date) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: COLUMN job.status; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(status) ON TABLE public.job TO nomadean;
GRANT ALL(status) ON TABLE public.job TO nomadean_nomadean;
GRANT ALL(status) ON TABLE public.job TO nomadean_job_seeker;


--
-- Name: TABLE level; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.level TO nomadean_job_seeker;


--
-- Name: COLUMN level.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.level TO nomadean;
GRANT ALL(id) ON TABLE public.level TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.level TO nomadean_job_seeker;


--
-- Name: COLUMN level.level; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(level) ON TABLE public.level TO nomadean;
GRANT ALL(level) ON TABLE public.level TO nomadean_nomadean;
GRANT ALL(level) ON TABLE public.level TO nomadean_job_seeker;


--
-- Name: TABLE skill; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public.skill TO nomadean_job_seeker;


--
-- Name: COLUMN skill.id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public.skill TO nomadean;
GRANT ALL(id) ON TABLE public.skill TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public.skill TO nomadean_job_seeker;


--
-- Name: COLUMN skill.skill; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(skill) ON TABLE public.skill TO nomadean;
GRANT ALL(skill) ON TABLE public.skill TO nomadean_nomadean;
GRANT ALL(skill) ON TABLE public.skill TO nomadean_job_seeker;


--
-- Name: TABLE "user"; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(id) ON TABLE public."user" TO nomadean;
GRANT ALL(id) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(id) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".email; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(email) ON TABLE public."user" TO nomadean;
GRANT ALL(email) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(email) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".password; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(password) ON TABLE public."user" TO nomadean;
GRANT ALL(password) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(password) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".name; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(name) ON TABLE public."user" TO nomadean;
GRANT ALL(name) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(name) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".profile_picture; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(profile_picture) ON TABLE public."user" TO nomadean;
GRANT ALL(profile_picture) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(profile_picture) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".birthday; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(birthday) ON TABLE public."user" TO nomadean;
GRANT ALL(birthday) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(birthday) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".description; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(description) ON TABLE public."user" TO nomadean;
GRANT ALL(description) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(description) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".cv; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(cv) ON TABLE public."user" TO nomadean;
GRANT ALL(cv) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(cv) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".city; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(city) ON TABLE public."user" TO nomadean;
GRANT ALL(city) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(city) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".education_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(education_id) ON TABLE public."user" TO nomadean;
GRANT ALL(education_id) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(education_id) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".experience_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(experience_id) ON TABLE public."user" TO nomadean;
GRANT ALL(experience_id) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(experience_id) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".skill_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(skill_id) ON TABLE public."user" TO nomadean;
GRANT ALL(skill_id) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(skill_id) ON TABLE public."user" TO nomadean_job_seeker;


--
-- Name: COLUMN "user".level_id; Type: ACL; Schema: public; Owner: nomadean
--

GRANT ALL(level_id) ON TABLE public."user" TO nomadean;
GRANT ALL(level_id) ON TABLE public."user" TO nomadean_nomadean;
GRANT ALL(level_id) ON TABLE public."user" TO nomadean_job_seeker;


--
-- PostgreSQL database dump complete
--

