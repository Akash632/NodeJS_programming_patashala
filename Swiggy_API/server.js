const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
 
app.use(express.json());
app.use(cors());
 
let db;
 
MongoClient.connect('').then((client) => {
    console.log("connected to DB server");
    db = client.db('food-delivery-db');
}).catch((err) => {
    console.log(err);
})
 
app.post('/signup', async (req, res) => {
    const { fullName, email, contact, password, add } = req.body;
    if (!fullName || !email || !contact || !password || !add) {
        res.json({ message: "please enter valid details" });
        return;
    } else {
        const result = await db.collection('user-cred').find({ email }).toArray();
        if (result.length) {
            res.json({ message: "user is already exist" });
            return;
        }
        const user = { fullName, email, contact, password, add };
        await db.collection('user-cred').insertOne(user);
        res.json({ message: "user created successfully" });
    }
});
 
 
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const result = await db.collection('user-cred').find({ email }).toArray();
        if (result.length) {
            if (result[0].password == password) {
                res.json({ message: 'login successful' });
            } else {
                res.json({ message: 'Invalid password' });
            }
        } else {
            res.json({ message: 'user doesn\'t exist' });
        }
    } else {
        res.json({ message: "Invalid email or password" });
    }
});
 
app.post('/forgotPassword', async (req, res) => {
    const { email, phoneNumber, newPassword } = req.body;
    // email -> is exist in cred.json, phoneNumber is == that existing user, oldPassword = newPassword
    if (email && phoneNumber && newPassword) {
        const result = await db.collection('user-cred').find({ email }).toArray();
        if (result.length) {
            if (result[0].contact == phoneNumber) {
                await db.collection('user-cred').updateOne({ email }, { $set: { password: newPassword } });
                res.json({ message: 'password updated successfully' });
            } else {
                res.json({ message: 'incorrect phone no' });
            }
        } else {
            res.json({ message: 'user doesn\'t exist' });
        }
    } else {
        res.json({ message: "Invalid phone number or email" });
    }
})
 
app.post('/addRestaurant', async (req, res) => {
    const restoDetails = req.body;
    if (restoDetails) {
        await db.collection('restaurant').insertOne(restoDetails);
        res.json({ message: 'restaurant details added in DB' });
    } else {
        res.json({ message: 'restaurant details is Empty' });
    }
})
 
app.get('/getRestaurant', async (req, res) => {
    const { location, food, id } = req.query;
    const result = await db.collection('restaurant').find({}).toArray();
    let data = [];
    if (result.length) {
        if (location) {
            result.forEach(eachResto => {
                if (eachResto.details.address == location) {
                    data.push(eachResto);
                }
            });
            res.json({ message: 'All the Restaurant', data });
        } else if (food) {
            result.forEach(eachResto => {
                eachResto.foodItems["veg"].forEach((foodItem) => {
                    if (foodItem.name == food) {
                        data.push(eachResto);
                    }
                });
                eachResto.foodItems["non-veg"].forEach((foodItem) => {
                    if (foodItem.name == food) {
                        data.push(eachResto);
                    }
                });
            });
            res.json({ message: 'All the Restaurant', data });
        } else if (id) {
            res.json({ message: 'All the Restaurant', data });
        }
    } else {
        res.json({ message: 'No Any Restaurant available' });
    }
})
 
 
 
const port = 3001;
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});