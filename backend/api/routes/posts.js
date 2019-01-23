const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/post');

//Returns all posts
router.get('/', (req, res, next) => {
    Post
    .find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    })  
});

router.post('/', (req, res, next) => {
    const d = new Date();
    const post = new Post({
        _id: mongoose.Types.ObjectId(),
        response_count: 0,
        post_content: req.body.post_content,
        created_at: d
    });
    post
        .save()
        .then(doc => {
            console.log("Saved post to database:", doc)
            res.status(201).json({
                message: 'Post created successfully',
                createdPost: post
            });    
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;