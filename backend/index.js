const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "iambatman"
const cors = require('cors')

const app = express()


const users = []

app.use(express.json())
app.use(cors())

function auth(req,res,next) {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token , JWT_SECRET, (err,decoded) => {
            if (err) {
                res.status(401).send({
                    message : "Unauthorized"
                })
            } else {
                req.user = decoded
                next();
            }
        })
    }
}


app.post('/signup',(req,res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    users.push({
        name,email,password
    })
    console.log("Signup successful")
    res.status(200).json({
        message : "Sign up Successful!",
        signup : true
    })
})

app.post('/signin',(req,res) => {
    const email = req.body.email
    const password = req.body.password

    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
        const token = jwt.sign({email : user.email},JWT_SECRET)

        user.token = token
        res.send({
            token
        })
    } else {
        res.status(403).json({
            message :"Invalid Username or Password"
        })
    }
})

app.get('/me',auth ,(req,res)=> {
    const user = req.user

    const account = users.find((u) => u.email === user.email)

    res.json({
        name : account.name,
        email : account.email
    })
})
app.listen(3000)