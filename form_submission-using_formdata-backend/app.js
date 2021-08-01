//IMPORTS-----------------------------------------------------------------------------------------------------------------------
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
//IMPORTS FROM FILES
const User = require('./models/app')






//VARIABLES
const port = process.env.PORT || 8000
const database = process.env.DATABASE



//DATABASE----------------------------------------------------------------------------------------------------------------------
mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('DATABASE Connected'))
.catch((error) => console.log(error))



//MIDDLEWARES--------------------------------------------------------------------------------------------------------------------
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())  



//ENDPOINTS-----------------------------------------------------------------------------------------------------------------------
app.post('/', (req,res) => {
    const user = new User(req.body)

    user.save()
    .then(() => {res.send(user)})
    .catch((error) => {res.send(error)})
})






//LISTEN--------------------------------------------------------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Backend is running at port ${port}`)
})