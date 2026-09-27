const express = require('express');
const cors = require('cors')
const app = express()
const port = 8080
const mysql = require('mysql2')
app.use(cors())
app.use(express.json())
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'employee_app',
  password: 'password',
  database: 'employee_management',
})

  connection.connect()

app.get('/', (req, res)=> {
  res.send('test message');
});

app.get('/users', (req, res) => {

    const limit = parseInt(req.query.limit) || 30;
    const skip = parseInt(req.query.skip) || 0;

    const dataQuery = `
        SELECT *
        FROM users
        LIMIT ? OFFSET ?
    `;

    const countQuery = `
        SELECT COUNT(*) AS total
        FROM users
    `;

    connection.query(
        dataQuery,
        [limit, skip],
        (err, rows) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    error: 'Database error'
                });
            }

            connection.query(
                countQuery,
                (err, countRows) => {

                    if (err) {
                        console.error(err);

                        return res.status(500).json({
                            error: 'Database error'
                        });
                    }

                    res.json({
                        data: rows,
                        total: countRows[0].total
                    });
                }
            );
        }
    );
});

app.get('/users/search', (req, res) => {

    const q = req.query.q || '';
    const limit = parseInt(req.query.limit) || 30;
    const skip = parseInt(req.query.skip) || 0;

    const searchTerm = `%${q}%`;

    const dataQuery = `
        SELECT *
        FROM users
        WHERE fname LIKE ?
           OR lname LIKE ?
           OR email LIKE ?
           OR phone LIKE ?
           OR company LIKE ?
        LIMIT ? OFFSET ?
    `;

    const countQuery = `
        SELECT COUNT(*) AS total
        FROM users
        WHERE fname LIKE ?
           OR lname LIKE ?
           OR email LIKE ?
           OR phone LIKE ?
           OR company LIKE ?
    `;

    const searchParams = [
        searchTerm,
        searchTerm,
        searchTerm,
        searchTerm,
        searchTerm
    ];

    connection.query(
        dataQuery,
        [...searchParams, limit, skip],
        (err, rows) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    error: 'Database error'
                });
            }

            connection.query(
                countQuery,
                searchParams,
                (err, countRows) => {

                    if (err) {
                        console.error(err);

                        return res.status(500).json({
                            error: 'Database error'
                        });
                    }

                    res.json({
                        data: rows,
                        total: countRows[0].total
                    });
                }
            );
        }
    );
});


app.post('/users/add', (req, res) => {
const {fname, lname, email, phone, company} = req.body;

const stmt = `
  insert into users
  (fname, lname, email, phone, company)
  values (?, ?, ?, ?, ?)
`;

connection.query(
  stmt, 
  [fname, lname, email, phone, company], 
  (err, result) => {
    if (err) {
      console.error(err); 
      return res.status(500).json({error: 'failed to add user'})
    }

    res.status(201).json({
      message: 'user added successfully', 
      id: result.insertId
    })
  }
)


})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
