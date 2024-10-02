const JWT_SECRET = "iambatman"
const jwt = require('jsonwebtoken')

function auth(req,res,next) {
    const token = req.headers.token

    const id = jwt.verify(token,JWT_SECRET)
    
    if (id) {
        req.userId = id
        next()
    } else {
        res.status(403).send({
            message : "Unauthorized"
        })
    }
}

module.exports = {JWT_SECRET , auth}