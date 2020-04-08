DROP TABLE IF EXISTS groupers_project_samples;
DROP TABLE IF EXISTS groupers_group;
DROP TABLE IF EXISTS groupers_project_img;
DROP TABLE IF EXISTS groupers_project;
DROP TABLE IF EXISTS groupers_users;

CREATE TABLE groupers_users
(
  user_id SERIAL PRIMARY KEY,
  fullname VARCHAR(50) NOT NULL,
  email TEXT UNIQUE NOT NULL UNIQUE,
  password TEXT UNIQUE NOT NULL,
  profile_pic TEXT
);

CREATE TABLE groupers_project
(
  project_id SERIAL PRIMARY KEY,
  creator INTEGER REFERENCES groupers_users(user_id),
  title VARCHAR(45) NOT NULL,
  description TEXT NOT NULL,
  difficulty VARCHAR(15) NOT NULL,
  funded BOOLEAN NOT NULL,
  amount INTEGER,
  start_time TIMESTAMP,
  end_time TIMESTAMP
);

CREATE TABLE groupers_project_img
(
  img_id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES groupers_project(project_id),
  img_url TEXT
);

CREATE TABLE groupers_group
(
  group_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES groupers_users(user_id),
  project_id INTEGER REFERENCES groupers_project(project_id),
  searching BOOLEAN
);

CREATE TABLE groupers_project_samples
(
  sample_id SERIAL PRIMARY KEY,
  group_id INTEGER REFERENCES groupers_group(group_id),
  github_url TEXT
);