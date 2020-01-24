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

router.put("/burgers", function(req, res){
    var burg = req.body.id
    var burgerName = req.body.name
    console.log("id", burg)
    burger.updateOne(burg, function(data){
        res.json(data)
        console.log("successfully updated")
    })
})

module.exports = router;

// Font end start
// $("#anyId").onClick(function(
//     $.ajax {
//         url: "/burgers",
//         type: "PUT",
//         data: "cheeseburger"
//     }
// )).then(
//     reload()
// )
