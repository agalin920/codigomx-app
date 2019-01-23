const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Response = require('../models/response');

//Returns response for a specific post_id
router.get('/:postId', (req, res, next) => {
    Response
    .find({post_id:req.params.postId})
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

//Posts a response to a specific post_id
router.post('/:postId', (req, res, next) => {
    const d = new Date();
    const response = new Response({
        _id: mongoose.Types.ObjectId(),
        post_id: req.params.postId,
        response_content: req.body.response_content,
        created_at: d
    });
    response
        .save()
        .then(doc => {
            console.log("Saved response to the database:", doc)
            res.status(201).json({
                message: 'Response created successfully',
                createdResponse: response
            });    
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;