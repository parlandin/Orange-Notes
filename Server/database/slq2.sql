CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

SELECT * from session
DELETE  from session
SELECT * from users

create table if not exists users (
    id serial primary key,
    firstname varchar (50) not null,
    surname varchar (50) not null,
    email varchar (100) not null,
    password varchar (200) not null,
    created_at timestamp with time zone default now(),
    constraint uk_users_email unique (email)
);


ALTER TABLE usuarios ADD 
