/// <reference path="jquery-3.6.0.min.js" /> 
/*
* Your name: Joni Mäki
*/
// document ready function
$(function () {
    // click event
    $("#going_in").on("click", function () {
        let date = new Date();
        let current_year = date.getFullYear();

        let year = Number($("#year").val());
        let age = current_year - year;

        if (age < 18) {
            $("#allow").html("too young");
        } else {
            $("#allow").html("Welcome!");
        }
    });
    // elementti saa fokuksen
    $("#year").on("focusin", function () {
        this.select();
        $("#allow").html("");
    });

    $("#even_odd").on("click", function () {
        let number = Number($("#number").val());
        if (number % 2 === 0) {
            // even
            $("#even").addClass("selected");
        } else {
            // odd
            $("#odd").addClass("selected");
        }
    });

    $("#pos_neg").on("click", function () {
        let number = Number($("#number").val());
        if (number < 0) {
            // even
            $("#neg").addClass("selected");
        } else {
            // odd
            $("#pos").addClass("selected");
        }
    });

    $("#number").on("focusin", function () {
        this.select();
        $(".even_odd").removeClass("selected");
        $(".pos_neg").removeClass("selected");
    });

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("#throw_dice").on("click", function () {
        let selection = $("[name=dice]:checked").val();
        if (selection === "1") {
            let dice1 = getRndInteger(1, 6);
            $("#result").html(dice1);
        } else {
            let dice1 = getRndInteger(1, 6);
            let dice2 = getRndInteger(1, 6);
            $("#result").html(dice1 + " " + dice2);
        }
    });

    $("[name=dice]").on("click", function () {
        $("#result").html("");
    });

    $("body").on("click", "#flowers1 li", function () {
        let flower = $(this).html();
        $("#selected").html(flower);
        $(this).remove();
    });

    $("#selected").on("click", function () {
        let flower = $(this).html()
        $("#flowers1").append("<li>" + flower + "</li>");
        $(this).html("");
    })



});



