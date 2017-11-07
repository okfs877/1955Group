var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    index: function(req, res){
        Person.find({}, function(err, people){
            return res.json(people);
        })
    },
    new: function(req, res){
        var personInstance = new Person();
        personInstance.name =req.params.name;
        personInstance.save(function(err){
            return res.redirect('/');
        })
    },
    remove: function(req, res){
        Person.remove({name:req.params.name}, function(err){
            return res.redirect('/');
        })
    },
    showOne: function(req, res){
        Person.findOne({name:req.params.name}, function(err, person){
            return res.json(person);
        })
    }
}