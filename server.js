const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

app.set('port', process.env.PORT || 5000);


// app.get('/', (req, res) => {
//     res.send('Root');
//   });

// app.get('/users', (req, res) => {
//   connection.query('SELECT * from users', (error, rows) => {
//     if (error) throw error;
//     console.log('User info is: ', rows);
//     res.send(rows);
//     });
//   });

app.get('/ots', (req, res) => {
    connection.query('SELECT * from 1208mysql', (error, rows) => {
    if (error) throw error;
        res.send(rows);
    });
});

app.get('/ots2', (req, res) => {
    connection.query('SELECT * from unique_key_df', (error, rows) => {
    if (error) throw error;
        res.send(rows);
    });
});
  
// app.get('/data', (req,res) => {
//     const data = [{
//         lastname: "Choi",
//         firstname : "Yongwoo"
//     },
//     {
//         lastname:"LEE",
//         firstname:"KS"
//     }
//     ];
//     res.json(data);
// })

// app.listen(PORT, () => {
//     console.log(`server running on PORT ${PORT}`)
// })

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
  });