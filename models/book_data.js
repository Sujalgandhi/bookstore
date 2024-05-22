const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true 
    },
})

const  Data_model = mongoose.model('Book_Store', dataSchema);

module.exports = Data_model