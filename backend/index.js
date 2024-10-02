const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const {UserModel} = require('./db')
const z = require('zod')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const {auth,JWT_SECRET} = require('./auth')

mongoose.connect('mongodb+srv://contactpranavm:Unnik123@cluster0.kzu2x.mongodb.net/todo-app-database')

const app = express()

app.use(express.json())
app.use(cors())


app.post('/signup',async (req,res) => {

    const bodySchema = z.object({
        name : z.string(),
        email : z.string().min(5).max(50).email(),
        password : z.string().min(6).refine((password) => /[A-Z]/.test(password) , {message : "Should contain altleast one Capital Letter"})
        .refine((password) => /[a-z]/.test(password), {message : "Should Contain atleast one Lowercase Letter"}).refine((password) => /[!@#$%^&*()]/.test(password),{message : "Should contian atleast one Special Characters"})
    })

    const parseDataSuccess = bodySchema.safeParse(req.body)

    if(!parseDataSuccess.success) {
        res.status(400).json({
            message  : "Incorrect Format",
            signup : false
        })
        console.log('incorrect format')
        return
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    console.log(password)

    const hashedPassword = await bcrypt.hash(password,5)
    
    console.log(hashedPassword)
    try {
        await UserModel.create({
            name : name,
            email : email,
            password : hashedPassword
        })
    }catch(e) {
        res.status(400).json({
            message : "Failed to Insert into DB",
            signup :  false
        })
    }
    
    res.status(200).json({
        message : "Sign up Successful!",
        signup : true
    })
})

app.post('/signin',async (req,res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email : email
    })

    if(!user) {
        res.status(403).json({
            message : "User Not Found"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password,user.password)

    if (passwordMatch) {
        const token = jwt.sign({id : user._id},JWT_SECRET)

        res.send({
            token :token,
            valid : false
        })
    } else {
        res.status(403).json({
            message :"Invalid Username or Password",
            valid : true
        })
        console.log("Invalid")
    }
})

app.get('/me',auth ,async (req,res)=> {
    const userId = req.userId
    console.log(userId)
    const account = await UserModel.findOne({
        _id : userId.id
    })
    res.json({
        name : account.name,
        email : account.email
    })
})
app.listen(3000)