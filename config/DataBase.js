const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sujalgandhi0507:12345@cluster0.bfh44tj.mongodb.net/user');

const DataBase = mongoose.connection

DataBase.on('connected', (err) => {
    if(err) {console.log("DataBase is not connected"); return false};
    console.log("DataBase is connected");
})

module.exports = DataBase