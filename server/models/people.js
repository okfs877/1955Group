var mongoose = require("mongoose");
//create our schema
var PersonSchema = new mongoose.Schema({
    name:{type: String, required:true, minlength:2}},
    {
        timestamps: true
    });
var Person = mongoose.model('Person', PersonSchema);
