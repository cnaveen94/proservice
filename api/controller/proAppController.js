'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

var myprofile = "My name is Naveen, I have 18 years of experience in app development"

// OLD METHODS
exports.list_all_profiles = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        // res.json(task);
        res.json(myprofile);
    });
};


exports.create_a_profile = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};