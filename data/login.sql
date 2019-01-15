CREATE TABLE IF NOT EXISTS login(
  username TEXT,
  password TEXT,
  PRIMARY KEY(username)
);

INSERT INTO login(username, password) VALUES ("keyboard", "mouse")