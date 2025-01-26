const db = require('../database')


// function to get all users

const GET_ALL_USERS = (req, res) => {

    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}


// function to get a single user based on ID

const GET_A_USER = async (req,res)=>{

    const {id} = req.params

    const sql = `SELECT * FROM users WHERE id = ${id}`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}

// function to get a single user


const GET_A_SINGLE_USER = (req, res) => {

    const {name,password} = req.body

    const sql = `SELECT * FROM users WHERE name='${name}' and password_hash='${password}'`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}


// function for creating users


const CREATE_A_USER = (req, res) => {

    const {name,nick_name,id,salary,email,password} = req.body

    const sql = `INSERT INTO users (name, email,password_hash, salary, nick_name) VALUES ('${name}','${email}','${password}',${salary},'${nick_name}')`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}


// function to update user information

const UPDATE_A_USER_INFO = (req, res) => {

    const {name,nick_name,id} = req.body

    const sql = `UPDATE users SET name = '${name}', nick_name ='${nick_name}' WHERE id = ${id}`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}

// function to delete a user

const DELETE_A_USER = (req, res) => {

    const {id} = req.body
    const sql = `DELETE FROM users WHERE id = ${id}`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
}


// Prepared statements

const FETCH_USERS= async (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
};

// function to fetch a single user by ID
const FETCH_SINGLE_USER = async (req, res) => {
    const sql = 'SELECT * FROM users WHERE name = ? and password_hash = ? ';
    const { name,password } = req.body;
    db.query(sql, [name,password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching the user');
        } else {
            res.json(results); // Send the first result as JSON
        }
    });
};

// function to add a new user

const CREATE_NEW_USER = async (req, res) => {
    const {name,nick_name,salary,email,password} = req.body
    const sql = 'INSERT INTO users (name, email,password_hash,salary,nick_name) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, password, salary, nick_name], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding the user');
        } else {
            res.status(201).send('User added successfully');
        }
    });
};

// function to update a user

const SAFE_UPDATE = (req, res) => {

    const {name,nick_name,id} = req.body
    const sql = 'UPDATE users SET name = ?, nick_name = ? WHERE id = ?';
    db.query(sql, [name, nick_name, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating the user');
        } else {
            res.json(results);
        }
    });
};

// Route to delete a user
const SAFE_DELETION = async (req, res) => {
    const { id } = req.body;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting the user');
        } else {
            res.send('User deleted successfully');
        }
    });
};





module.exports = {GET_ALL_USERS, GET_A_SINGLE_USER, UPDATE_A_USER_INFO, DELETE_A_USER, CREATE_A_USER, FETCH_USERS, FETCH_SINGLE_USER, CREATE_NEW_USER, SAFE_UPDATE, SAFE_DELETION,GET_A_USER}
