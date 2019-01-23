const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const postRoutes = require('./api/routes/posts');
const responseRoutes = require('./api/routes/responses');

//Connect to mongodb
mongoose.connect('mongodb+srv://db-admin:' + process.env.MONGO_ATLAS_PW + '@codigomx-app-6yyt4.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Elminate CORS errors
app.use((req, res, next) => {
    //Restrict Origin
    res.header("Access-Control-Allow-Origin", "*");
    //Restrict Headers
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Restrict Methods
    if (req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Routes
app.use('/posts', postRoutes);
app.use('/responses', responseRoutes);

//Throws a 404 error if route is not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//Throws any other error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;