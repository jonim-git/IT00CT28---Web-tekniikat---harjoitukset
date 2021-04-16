/// <reference path="jquery-3.6.0.min.js" /> 
/*
 * Your name: 
 */

$(function () {
    /**
     * Generates a random number in a min - max range
     * 
     * @param {Number} min  minimum value for a random number
     * @param {Number} max  maximum value for a random number
     * @returns {Number}    generated random number
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Calculates the around of circle or square
     * 
     * @param {Number} value    radius or side measurement
     * @param {Number} type     1 = circle, 2 = square
     * @returns {String}        result of a calculation
     */
    function calculateAround(value, type) {
        let result = "";
        if (type === 1) {
            let around = 2 * Math.PI * value;
            result = "Circle around: " + around.toFixed(1);
        } else {
            let around = value * 4;
            result = "Square around: " + around.toFixed(1);
        }
        return result;
    }

    // dice images, use indexes 1 - 6
    let dice = [
        '',
        '<span><img src="img/noppa1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa2.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa3.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa4.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa5.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa6.png" class="img-fluid" alt=""/></span>'
    ];


    // red and blue flower
    let pair = [
        '<span><img src="img/flower1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/flower2.png" class="img-fluid" alt=""/></span>'
    ];

    // Exercise 1. Circle or Square
    $("#calculate").on("click", function () {
        let value = Number($("[name=rad_cir_opt]:checked").val());
        let radius_side = Number($("#radius_side").val())
        let lasku = calculateAround(radius_side, value)
        $("#result").html(lasku)
    })
    $("#radius").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("#radius_side").trigger("focus");
        }

    })
    $("#square").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("#radius_side").trigger("focus");
        }

    })

    $("#radius_side").on("focusin", function () {
        this.select()
        $(this).val("");
    })
    // Exercise 2. Circle and Square   

    $(".rad_cir").on("click", function () {
    let input = $(this).attr("data-content")
    let tulostus = $(this).attr("data-result")
    $(tulostus).html("")
    $(input).val("");
    if ($(this).prop("checked") === true) {
        $(input).removeClass("invisible")
        $(input).trigger("focus");

    } else {
        $(input).addClass("invisible")
    }

})

    $("#calculate2").on("click", function () {
    let kokoelma = $(".rad_cir");
    kokoelma.each(function () {
        if ($(this).prop("checked") === true) {
            let value_attribuutti = Number($(this).val())
            let syöttöelementin_nimi = $(this).attr("data-content")
            let mitta = Number($(syöttöelementin_nimi).val())
            let lasku = calculateAround(mitta, value_attribuutti)
            let tulostuselementin_nimi = $(this).attr("data-result")
            $(tulostuselementin_nimi).html(lasku) 
        }
    })
})
    // Exercise 3. Random numbers 1    


    // Exercise 4. Random numbers 2           


    // Exercise 5. Throw dices    


});
