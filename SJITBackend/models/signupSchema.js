const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    firstName:String, 
    lastName:String,
    email:String,
    phoneNumber:Number,
    password:String,
})

const signup_schema = mdb.model("signup", signupSchema)

module.exports = signup_schema