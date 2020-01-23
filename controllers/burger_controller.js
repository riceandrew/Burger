var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
      res.json(data)
  });
});

router.post("/burgers", function(req, res){
    var burg = req.body
    burger.insertOne(burg, function(data){
        res.json(data)
    });
});

router.update("/burgers", function(req, res){
    var burg = req.body
    burger.updateOne(burg, function(data){
        res.json(data)
    })
})

module.exports = router;