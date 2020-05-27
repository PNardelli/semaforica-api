const mongoose = require('mongoose');


const PlanoSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

mongoose.model('plano', PlanoSchema);