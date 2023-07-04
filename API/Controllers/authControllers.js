const path = require('path'); 
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
 
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const {logEvents} = require('../utility/logger.js');
const { use } = require('../routes/userRoute.js');
 
 
 
var userData = {
    users: require('../models/users.json'),
    setUsers : function (updatedUsers){
        this.users = updatedUsers
    }
}
// sign up a new user
// email, username and password
 
// to login a user
// username and password
 
const writeDb = async (updatedJson) => {
    console.log("checking here --------");
    console.log(updatedJson);
    console.log(JSON.stringify(updatedJson));
    await fs.writeFile(path.join(__dirname,'..','models','users.json'), JSON.stringify(updatedJson));
}
const signupUser = async (req, res) => {
 
 
    const {email, username, password} = req.body;
 
    // validate request
 
    if (!email || !username || !password) {
        return res.status(403).json({"message" : "wrong request"});
    }
 
    // check if user already signed up
 
    const user = userData.users.find((user) => user.username == username);
 
    if(user) {
        return res.status(409).json({"message" : "already registered user"});
    }
    try {
        const hashedPass = await bcrypt.hash(password, 10);
 
        const newUser = { "email" : email, "username" : username, "password" : hashedPass};
 
        const finalUsers = [...userData.users, newUser];
        userData.setUsers(finalUsers);
        await writeDb(finalUsers);
    }
    catch(err) {
        logEvents(err.message, __filename, "ERROR");
    }
 
 
    return res.status(201).json({
        "message" : "user created"
    });
 
}
 
const loginUser = async (req, res) => {
    const {username, password} = req.body;
 
    // validate my req
 
    if (!username || !password) {
        return res.status(403).json({"message" : "wrong request"});
    }
 
    const user = userData.users.find((user) => user.username == username);
 
    if(!user) {
        return res.status(409).json({"message" : "user not found"});
    }
 
    const isPassCorrect = await bcrypt.compare(password, user.password);
 
    if(!isPassCorrect){
        return res.status(409).json({"message" : "oops! incorrect password!"});
    }
 
    const accessToken = jwt.sign({
        "username" : username
    }, 
    process.env.ACCESS_KEY, 
    {expiresIn : '60s'} 
    );
 
    const refreshToken = jwt.sign({
        "username" : username
    }, 
    process.env.REFRESH_KEY, 
    {expiresIn : '5d'} 
    );
 
    const otherUsers = userData.users.filter((user) => user.username != username);
 
 
    const userWithRefreshToken = {...user, "refresh_token" : refreshToken};
 
    const finalUsers = [...otherUsers, userWithRefreshToken];
 
    userData.setUsers(finalUsers);
    await writeDb(finalUsers);
 
 
    // I want if my token expires my client can regenerate the token
    // Ask my client to re login
    //
 
    // Server Logout
    // I want to hold the account -> dont allow that user to use the service
    // I remove this user for db
 
    // Client Logout
    // Delete the access token from cookie
 
    // Refresh Token - db - change the refresh 
 
    // when to create ?
    // user login
 
    return res.status(200).json({
        "access_token" : accessToken,
        "refresh_token" : refreshToken
    });
 
}
 
 
const recreateAccessToken = (req, res) => {
 
    var headerData = req.headers['authorization'];
    if(!headerData) headerData = req.headers['Authorization'];
 
    if(!headerData) return res.status(403).json({
        "message" : "require token to regenerate token"
    });
 
    const refreshToken = headerData.split(' ')[1];
 
    const user = userData.users.find((user) => user.refresh_token == refreshToken);
 
    if(!user) return res.status(403).json({
        "message" : "require token to regenerate token"
    });
 
    try {
        jwt.verify(refreshToken, process.env.REFRESH_KEY);
    }
    catch(err) {
        return res.status(403).json({
            "message" : "incorrect JWT"
        });
    }
 
    const access_token = jwt.sign({
        "username" : user.username
    }, process.env.ACCESS_KEY, {expiresIn : '60s'});
 
 
    return res.status(200).json({
        "access_token" : access_token
    });
 
}
 
module.exports = {signupUser, loginUser, recreateAccessToken};
 
 
// when the token expires