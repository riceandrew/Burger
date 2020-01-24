// Font end start
$("#addBurger").click(function(){
    $.ajax({
        url: "/burgers",
        type: "POST",
        data: {
            name: $("#burgerInput").val(),
            devoured: 0
        }
    }).then(function(){
        window.location = "/"
    })
})

$("#devour").click(function(){
    $.ajax({
        url: "/burgers",
        type: "PUT",
        data: {
            name: $("#devourInput").val(),
            devoured: 1
        }
    }).then(function(){
        window.location = "/"
    })
})