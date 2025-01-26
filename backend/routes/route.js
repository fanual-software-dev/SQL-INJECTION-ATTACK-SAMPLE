const express = require('express')
const { GET_ALL_USERS, GET_A_SINGLE_USER, UPDATE_A_USER_INFO, DELETE_A_USER, CREATE_A_USER, FETCH_USERS, FETCH_SINGLE_USER, CREATE_NEW_USER, SAFE_UPDATE, SAFE_DELETION,GET_A_USER} = require('../controllers/users')
const router = express.Router()


// Vulnerable endpoints for sql injection attack

// get all users

router.get('/',GET_ALL_USERS)

// get a single user by id

router.get('/:id',GET_A_USER)

// get single user

router.post('/user',GET_A_SINGLE_USER)

// create a user

router.post('/new',CREATE_A_USER)

// update user info

router.patch('/update',UPDATE_A_USER_INFO)

// delete user info

router.delete('/delete',DELETE_A_USER)


// Safer endpoints

router.get('/safe',FETCH_USERS)

// get single user

router.post('/user/safe',FETCH_SINGLE_USER)

// create a user

router.post('/new/safe',CREATE_NEW_USER)

// update user info

router.patch('/update/safe',SAFE_UPDATE)

// delete user info

router.delete('/delete/safe',SAFE_DELETION)



module.exports = router