DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS userDetail;
DROP TABLE IF EXISTS template;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
  seed TEXT NOT NULL
);

CREATE TABLE userDetail (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_count TEXT UNIQUE NOT NULL,
  rating TEXT NOT NULL
  num_of_tran TEXT NOT NULL
);

CREATE TABLE item (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  template_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  subCat TEXT NOT NULL,
  tag TEXT NOT NULL,
  msg TEXT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES user (id)
  FOREIGN KEY (template_id) REFERENCES template (id)
);

CREATE TABLE template (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created TEXT NOT NULL,
  subCat TEXT NOT NULL,
  Cat TEXT NOT NULL
);
