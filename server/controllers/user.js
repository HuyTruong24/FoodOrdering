const {users} = require('../../data/data.js')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')
const config = require('dotenv').config()

const createUser = (req,res) =>{
    const {user} = req.body
    if(!user){
        return res.status(404).json({success:false, msg: "User account info is not provided"})
    }
    const {email, password, retypePassword} = user
    const filteredArr = users.filter(u => u.email === email)
    if(filteredArr.length > 0){
        return res.status(401).json({success:false, msg: `${email} already exists`})
    }
    if(password !== retypePassword){
        return res.status(401).json({success:false, msg: "Password does not match with retyped password"})
    }

    const newUser = {
        userID: uuidv4(),
        email: email,
        password: password
    }
    users.push(newUser)
    return res.status(201).json({success: true, msg: "Account created", user: newUser})
}

const verifyUser = (req,res) =>{
    const {user} = req.body
    if(!user){
        return res.status(404).json({success:false, msg: "User account info is not provided"})
    }

    const {email, password} = user
    const verifiedUser = users.filter(u => u.email === email && u.password === password)
    if(verifiedUser.length === 0){
        return res.status(403).json({success:false, msg: "Invalid credentials"})
    }

    //const accessToken = jwt.sign(verifiedUser, process.env.TOKEN) //encode credentials with env token
    const accessToken = null
    return res.status(200).json({success:true, accessToken: accessToken, msg: "Valid credentials"})
}


module.exports = {createUser, verifyUser}