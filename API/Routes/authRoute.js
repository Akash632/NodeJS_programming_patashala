const express = require('express');
const {logEvents} = require('../utility/logger.js');
const jwt = require('jsonwebtoken');
const ALL_PERMISSIONS = require('../config/all_permissions.js');
 
require('dotenv').config();
var userData = {
    users: require('../models/users.json'),
    setUsers : function (updatedUsers){
        this.users = updatedUsers
    }
}
const apiController = require('../controllers/apiController.js');
// '/auth'
const apiRoute = express.Router();
 
apiRoute.use((req, res, next) => {
    var headerData = req.headers['authorization'];
    if(!headerData) headerData = req.headers['Authorization'];
 
    if(!headerData) res.status(403).json({
        "message" : "unauth user"
    });
    console.log(headerData);
 
    const token = headerData.split(' ')[1];
    try {
        var result = jwt.verify(token, process.env.ACCESS_KEY);
        req.body.username = result.username;
        console.log(result);
        next();
 
    }
    catch(err) {
        console.log(err.message);
        res.status(403).json({
            "message" : "unauth user"
        });
    }
 
})
 
const authorize = (permission) => {
    return (req, res, next) => {
        const {username} = req.body;
 
        console.log("here");
        if(!username) return res.status(403).json({
            "message" : "unauthorized user"
        });
 
        console.log("here");
 
        const user = userData.users.find((user) => user.username == username);
        if(!user) return res.status(403).json({
            "message" : "unauthorized user"
        });
 
        console.log(permission);
        console.log(user.permissions);
 
        const perm = user.permissions.find((per) =>  per == permission);
        console.log(perm);
        if(!perm) return res.status(403).json({
            "message" : "unauthorized user"
        });
 
        console.log("here");
 
 
        next();
 
    }
}
 
 
apiRoute.get('/getData', authorize(ALL_PERMISSIONS.write), apiController.getSomeData);
apiRoute.post('/updateData', apiController.updateSomeData);
 
// [p1,p2,p3] - all_of, any_of 
 
module.exports = apiRoute;
