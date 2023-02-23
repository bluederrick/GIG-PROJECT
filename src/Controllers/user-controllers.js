const express = require('express');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const userModel = require('../models/User-models.js');

//All http process are asynchronous ;
// console.log("success")
const GetAllUsers = async (req, res) => {
    let users;
    console.log("users")
    //wrap in try catch block when dealing with database , databse can fail any time 
    try {
        // use await since its an acynchronuous task 
        users = await userModel.find()
        //



    } catch (e) {
        console.log(e.message)
    }
    if (users) {
        res.status(404).json({ message: "no users found" })
    }
}



const signup = async (req, res) => {
    try {
        const { Password, Email } = req.body
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(Password, salt);

        console.log(hashPassword),
            console.log(salt)
        const Users = new userModel({
            // Name: req.body.Name,
            password: req.body.password,
            Email: req.body.Email,
            // Password,
            // Email,
        });
        let Saveduser = Users.save().then(function () {
            response.json(Saveduser)
        }).catch(function (err) { console.log(err) });

        console.log(Saveduser)
    } catch (e) {
        console.dir(e)
    } res.status(200).json({ message: "databases saved successfully" })

}




const Login = (req, res) => {
    const userLogin = userModel.find(obj => obj.Email === req.body.Email);

    if (!userLogin) {
        return res.status(404).json({ message: "cannot find user ......please singup..." });
    }

    try {
     await bcrypt.compare(req.body.Password, userLogin.password)
    } catch (e) {
        return res.status(404).json({ message: "please enter the write passwords..." });
    }
    return res.send(`passowrd entered correctly`)
}

module.exports = { signup, GetAllUsers };