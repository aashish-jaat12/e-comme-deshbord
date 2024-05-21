const express = require('express')
require('./models/db-conn')
const user = require('./models/user')
const jwt = require('jsonwebtoken')
const product = require('./models/Products')

const jwtkey = "ashish-econm"


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/registation', async (req, res) => {
   

    const { name, email, password } = req.body

    const data = new user({
        name, email, password
    })
    const users = await data.save()
if(users){
    jwt.sign({ users }, jwtkey,  (err, token) => {
        res.send({ users, auth: token })
    })}

    
})

app.post('/login', async (req, res) => {

    const { email, password } = req.body

    const users = await user.findOne({ email: email })
    if (users) {
        if (password === users.password) {
            jwt.sign({ users }, jwtkey,  (err, token) => {
                res.send({ users, auth: token })
            })
        } else {
            res.send({ message: "Password did'n match.." })
        }
    } else {
        res.send({ message: "User not registred" })
    }

})


app.post('/add-product',midverifytoken, async (req, res) => {

    const result = new product(req.body)
    const data = await result.save();
    res.send(data)

})


app.get('/product',midverifytoken, async (req, res) => {

    const result = await product.find({});
    if (result.length > 0) {
        res.send(result)
    } else {
        res.send({ message: " No product found" })
    }

})

app.delete('/delete/:id',midverifytoken, async (req, res) => {

    const result = await product.deleteOne({ _id: req.params.id })

    res.send(result)

})



app.get('/updatefilup/:id',midverifytoken, async (req, res) => {

    const result = await product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result)
    } else {
        res.send("not found")
    }
})


app.put('/update/:id',midverifytoken, async (req, res) => {
    let result = await product.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)

})


app.get('/searchs/:key', midverifytoken, async (req, res) => {
    let result = await product.find().or([
        { name: { $regex: req.params.key, $options: 'i' } },
        { company: { $regex: req.params.key, $options: 'i' } },
        { category: { $regex: req.params.key, $options: 'i' } },
    ]

    );

    res.send(result)


})
app.get('/profile',midverifytoken,async (req , res)=>{

    let result = await user.find()
    res.send(result)

})

function midverifytoken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ');
        jwt.verify(token[1], jwtkey, (err, nexts) => {
            if (nexts) {
                next()
            } else {

                res.status(401).send({ message: "Please privaid token" })

            }
        })
    } else {
        res.status(403).send({ message: "Please add token " })
    }

}

app.listen(4000)