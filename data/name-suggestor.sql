CREATE TABLE IF NOT EXISTS names(
  first_name TEXT,
  middle_name TEXT,
  last_name TEXT,
  PRIMARY KEY(first_name, middle_name, last_name)
);