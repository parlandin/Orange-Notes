CREATE TABLE IF NOT EXISTS  users (
    id SERIAL NOT NULL,
    name VARCHAR NOT NULL,
	  email VARCHAR NOT NULL,
	  picture VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
	  created_at TIMESTAMP DEFAULT now(),
    last_login TIMESTAMP DEFAULT now() NOT NULL,
    latest_day TIMESTAMP DEFAULT now() NOT NULL,
    consecutive_days INTEGER DEFAULT 1 NOT NULL,
    PRIMARY KEY (id)
    UNIQUE(email)
)

CREATE INDEX id ON users (id)
CREATE INDEX email ON users (email)

CREATE TABLE IF NOT EXISTS  notes (
  note_id SERIAL NOT NULL,
  title VARCHAR NOT NULL,
	content TEXT NOT NULL,
	title_color VARCHAR(10) NOT NULL DEFAULT '#1e1e1e',
	content_color VARCHAR(10) NOT NULL DEFAULT '#1e1e1e',
	box_color VARCHAR(10) NOT NULL DEFAULT '#fff',
	created_at TIMESTAMP DEFAULT now(),
	user_id SERIAL,
    PRIMARY KEY (note_id),
   	CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
	  ON DELETE CASCADE
)

CREATE INDEX note_id ON notes (note_id)
CREATE INDEX user_id ON notes (user_id)