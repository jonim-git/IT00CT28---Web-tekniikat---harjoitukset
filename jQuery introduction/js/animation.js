/// <reference path="jquery-3.6.0.min.js" />
$(function () {
    //jQueryn piilotus/esille tuominen: show/hide; slideDown/slideUp; fadeIn/fadeOut
    // aikamäärä, jonka esilletuonti/piilotus vie aikaa
    /**
     * 
     */
    /* $("#flower1").on("click", function(){
        $("#flower1").hide(5000); //5000 ms = 5s
        $("#peony1").show(5000);
    })  */

    /**
     * Kun pikkukuva on piilotettu, niin sitten aletaan tuoda isoa kuvaa esille
     */
    $("#flower1").on("click", function () {
        $("#flower1").hide(5000, function () {
            $("#peony1").show(5000);
        })
    });

    $("#peony1").on("click", function () {
        $("#peony1").hide(5000, function () {
            $("#flower1").show(5000);
        });

    });

    //easing: linear (tasainen nopus) /swing (alussa hitaammin, keskellä nopeammin, lopussa hitaammin)

    $("#flower2").on("click", function () {
        $("#flower2").slideUp(5000, function () {
            $("#peony2").slideDown(5000);
        })
    });
    // voi käyttää $(this), joka viittaa elementtii, josta tapahtuma tuli
    $("#peony2").on("click", function () {
        $("#peony2").slideUp(5000, function () {
            $("#flower2").slideDown(5000);
        });

    });

    $(".fa").on("click", function () {
        $(this).parent().next().slideToggle(3000, function () {
            // tässä kohti ollaan dd-elementissä
            // etsitään i-elementti
            let paikka = $(this).prev().children().first();
            if (paikka.hasClass("fa-plus-circle")) {
                paikka.removeClass("fa-plus-circle").addClass("fa-minus-circle")
            } else {
                paikka.removeClass("fa-minus-circle").addClass("fa-plus-circle")
            }
        });

    })
});