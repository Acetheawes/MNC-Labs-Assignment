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
# Database Description

- Table: users
- Description: Stores employee information.

| Field      | Type         | Null | Key | Default | Description              |
|------------|--------------|------|-----|---------|--------------------------|
| id         | int(11)      | NO   | PRI | NULL    | Unique employee ID       |
| firstName  | varchar(100) | NO   |     | NULL    | Employee's first name    |
| lastName   | varchar(100) | NO   |     | NULL    | Employee's last name     |
| image      | varchar(500) | YES  |     | NULL    | Profile image URL        |
| age        | int(11)      | YES  |     | NULL    | Employee's age           |
| gender     | varchar(50)  | YES  |     | NULL    | Employee's gender        |
| birthDate  | date         | YES  |     | NULL    | Employee's date of birth |
| email      | varchar(255) | NO   | UNI | NULL    | Employee's email         |
| phone      | varchar(30)  | YES  |     | NULL    | Employee's phone number  |
| address    | varchar(500) | YES  |     | NULL    | Full employee address    |
| department | varchar(100) | YES  |     | NULL    | Employee's department    |
| title      | varchar(100) | YES  |     | NULL    | Employee's job title     |
| company    | varchar(150) | NO   |     | NULL    | Employee's company       |
| university | varchar(200) | YES  |     | NULL    | Employee's university    |

# Tech Stack
- Frontend: React + Typescript with Vite
- Backend: Node.js with Express, provides the REST API Endpoints
- Database: Mariadb for storing employee information, communication done using mysql2
- State Management: Redux toolkit to centrally manage employees, search state, pagination, etc
- Navigation: Page switching via basic react logic and redux. Not using router
- API Communication: Using axios in a dedicated file service.ts
- UI: Material UI for convenient UI elements, Tailwind CSS
