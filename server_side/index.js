const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '<password>',
    database: '<dbname>'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql database connected...');
});

const app = express();

app.get('/getRows',(req, res) => {
    let sql = 'SELECT * FROM mock_data';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
})