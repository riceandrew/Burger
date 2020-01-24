var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb){
    orm.insertOne("burgers", ["name", "devoured"], [burger.name, false], function(data){
        cb(data)
    })
  },
  updateOne: function(burger, cb){
      console.log(burger)
      orm.updateOne("burgers", ["name", "devoured"], [burger.name, false], function(data){
          cb(data)
      })
  }
}


  module.exports = burger;