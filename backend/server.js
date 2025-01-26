const express = require('express')
const cors = require('cors')

const app = express()
const UserRouter = require('./routes/route') 

// app.use(cors())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use(express.json())

app.listen(process.env.PORT)

app.use('/users',UserRouter);