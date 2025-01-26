require('dotenv').config()
const mysql = require('mysql2')

const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'signin#fan2024',
    database:'ss_lab'
})

db.connect(err=>{
    if (err){
        console.error('error connecting to the database')
        return;
    }

    console.log('connected to mysql database successfuly!!')


})

module.exports = db