const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    playerName:{
        type: String,
        unique: true,
        require:true
    }, 

    number:{
        type: Number,
        require: true
    },

    country:{
        type: String,
        require:true
    },

    age:{
        type: Number,
        require: true
    },

}, {timestamps:true});

const playerModel = mongoose.model('party', playerSchema)

module.exports = playerModel
