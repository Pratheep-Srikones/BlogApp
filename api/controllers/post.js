import {db} from "../db.js";
import jwt from 'jsonwebtoken';
export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT DISTINCT * FROM post WHERE category = ?" : "SELECT DISTINCT * FROM post";
    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).json(err);
        //const uniqueData = [...new Map(data.map(item => [item.post_id, item])).values()];
        return res.status(200).json(data);
    });
};

export const getPost = (req,res) => {
    const q = "SELECT post_id, username, heading, description, image, picture, category, date FROM user  INNER JOIN post USING(user_id) WHERE post.post_id = ?";
    db.query(q,[req.params.id], (err,data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    })
}


export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not Authenticated... Authentication failed");

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;

        // Log the postId and userInfo for debugging
        console.log("Post ID:", postId);
        console.log("User Info:", userInfo);

        const q = "DELETE FROM post WHERE post_id = ? AND user_id = ?";
        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json("Database error occurred.");
            }

            if (data.affectedRows === 0) {
                return res.status(403).json("You can only delete your own posts!");
            }

            return res.status(200).json("Post has been deleted");
        });
    });
};


export const addPost = (req,res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not Authenticated... Authentication failed");
    
    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const q = "INSERT INTO post(heading,description,image,category,date,user_id) VALUES (?) "
        const values = [
            req.body.heading,
            req.body.description,
            req.body.image,
            req.body.category,
            req.body.date,
            userInfo.id
        ];

        db.query(q,[values],(err,data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post has been added");
        })
    });
}


export const updatePost = (req,res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not Authenticated... Authentication failed");
    
    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const postId  = req.params.id;
        const q = "UPDATE post SET heading = ?, description=?, image=?, category=? WHERE post_id = ? AND user_id = ?"
        const values = [
            req.body.heading,
            req.body.description,
            req.body.image,
            req.body.category,
        ];

        db.query(q,[...values,postId,userInfo.id],(err,data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post has been updated");
        })
    });
} 