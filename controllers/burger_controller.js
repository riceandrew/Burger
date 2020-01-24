var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data)
    });
});

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log('hello');
        res.send(`
        <html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <link rel="stylesheet" href="/public/assets/css/burger_style.css">

    <title>Burgers</title>
  </head>
  <body>
    <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1>Burgers</h1>
            </br>
            </br>
            ${data.map(b => `<h2>${b.name}</h2>`)}
          </div>
          <div class="col-sm">
              <img src="/public/assets/img/burger.png">
          </div>
          <div class="col-sm">
            <h1>Devoured</h1>
          </div>
        </div>
        <div class="row">
            <div class="col-sm">
            <input id="burgerInput"></input>
            <button id="addBurger">Add Burger</button>
        </div>
        <div class="row">
        <div class="col-sm">
        <input id="devourInput"></input>
        <button id="devourButton">Devour Burger</button>

    </div>
      </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="./index.js"></script>
    </body>
</html>
        `)
    });
});


router.post("/burgers", function (req, res) {
    var burg = req.body
    burger.insertOne(burg, function (data) {
        res.json(data)
    });
});

router.put("/burgers", function (req, res) {
    var burg = req.body.id
    var burgerName = req.body.name
    console.log("id", burg)
    burger.updateOne(burg, burgerName, function (data) {
        res.json(data)
        console.log("successfully updated")
    })
})

module.exports = router;


