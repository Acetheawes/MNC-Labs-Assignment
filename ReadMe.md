# Run Instructions: 

## Database: 
- Using mariadb, execute "employee_management.sql" and populate_database.sql scripts, in that order. 
- Create a user called employee_app@localhost, identified by 'password'
- Grant all privileges on employee_management to employee_app

## Backend Setup: 
- cd ./backend/
- npm install
- node index.js
- Backed will run on localhost:8080

## Frontend Setup: 
- cd ./frontend/
- npm install
- npm run dev
The frontend will run on localhost:5173

# API Endpoints: 
- Get Employees: 
GET /users/search?q=''

- Search Employees: 
GET /users/search?q=john

- Add Employee
POST /users/add

# Database description
- Table: users
- Users: 
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int(11)      | NO   | PRI | NULL    | auto_increment |
| fname   | varchar(100) | NO   |     | NULL    |                |
| lname   | varchar(100) | NO   |     | NULL    |                |
| email   | varchar(255) | NO   | UNI | NULL    |                |
| phone   | varchar(30)  | YES  |     | NULL    |                |
| company | varchar(150) | NO   |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+

# Tech Stack
- Frontend: React + Typescript with Vite
- Backend: Node.js with Express, provides the REST API Endpoints
- Database: Mariadb for storing employee information, communication done using mysql2
- State Management: Redux toolkit to centrally manage employees, search state, pagination, etc
- Navigation: Page switching via basic react logic and redux. Not using router
- API Communication: Using axios in a dedicated file service.ts
- UI: Material UI for convenient UI elements, Tailwind CSS
