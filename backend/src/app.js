const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb+srv://unicad:unicad@cluster0-ymxdx.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })



class AppController {
    constructor(){
        this.express = express();
        
        this.middlewares();
        this.routes();
               

    }

    middlewares(){
        this.express.use(cors());
        this.express.use(express.json());
    }
    routes(){
        this.express.use(require('./routes'));
    }

}

module.exports = new AppController().express;