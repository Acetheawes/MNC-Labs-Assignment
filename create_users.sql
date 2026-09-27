CREATE TABLE users (
  id INT auto_increment primary key, 
  fname varchar(100) not null, 
  lname varchar(100) not null, 
  email varchar(255) not null unique, 
  phone varchar(30), 
  company varchar(150) not null
);
