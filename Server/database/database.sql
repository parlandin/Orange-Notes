CREATE TABLE IF NOT EXISTS  users (
    id SERIAL NOT NULL,
    name VARCHAR NOT NULL,
	  email VARCHAR NOT NULL,
	  picture VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
	  created_at TIMESTAMP DEFAULT now(),
    PRIMARY KEY (id)
    UNIQUE(email)
)

CREATE INDEX id ON users (id)

select * from users;