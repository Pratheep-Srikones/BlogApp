import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    // Check if the user already exists
    const q = "SELECT * FROM user WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        if (data.length) {
            return res.status(409).json("User Already Exists!");
        }

        // Encrypt password and create new user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO user (username, email, password, picture) VALUES (?)";
        const values = [req.body.username, req.body.email, hash, req.body.picUrl];

        db.query(q, [values], (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            return res.status(200).json("Account has been created");
        });
    });
};
export const login = (req,res) => {
    //Check existence
    const q = "SELECT * FROM user WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length == 0) return res.status(404).json("User not found");

        //Check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password); 

        if (!isPasswordCorrect) return res.status(400).json("Wrong Username or Password!");

        const token = jwt.sign({id:data[0].user_id}, "jwtkey");
        console.log("Token: ",token)
        const {password, ...other} = data[0];
        res.cookie("access_token",token, {
            httpOnly : true,
            secure: false,
            sameSite: "lax",
        }).status(200).json(other);
        console.log("OK?")

    });

};
export const logout = (req,res) => {
    res.clearCookie("access_token", {
        sameSite:"none",
        secure: true,
    }).status(200).json("user has been logged out");
};