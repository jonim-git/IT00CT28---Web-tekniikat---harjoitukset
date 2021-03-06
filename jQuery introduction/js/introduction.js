/// <reference path="jquery-3.6.0.min.js" />
$(function () {
    // tähän väliin kirjoitetaan js-koodi

    // id:n perusteella click-tapahtuma
    $("#calculate1").on("click", function () {
        // luetaan input-elementistä muuttujaan numeerisena
        let kalorit = Number($("#amount1").val());
        let joulet = kalorit * 4.184;
        $("#result1").html(joulet.toFixed(0) + " J");

    });

    $("#amount1").on("focusin", function () {
        $("#result1").html(""); //tyhjentää tulostusalueen
        // this >> elementti, josta tapahtuma tuli
        // this >> valitsee kaikki; js oma funktio ei käytetä $
        this.select();
    });

    $("#calculate2").on("click", function () {
        let määrä = Number($("#amount2").val());
        // valitusta valintanapista luetaan value-attribuutin arvo
        let suunta = Number($("[name=caljou2]:checked").val()); // 1 tai 2 vai "1" tai "2"?
        if (suunta === 1) {
            //kalorit jouleiksi
            let tulos = määrä * 4.184;
            $("#result2").html(määrä + " cal = " + tulos.toFixed(0) + " J");
        } else {
            // joulet kaloreiksi
            let tulos = määrä * 0.2390;
            $("#result2").html(määrä + " J = " + tulos.toFixed(0) + " cal");
        }
    });

    $("#amount2").on("focusin", function () {
        $("#result2").html("");
        this.select();
    });

    $("[name=caljou2]").on("click", function () {
        //siirretään fokus input-elementtiin
        $("#amount2").trigger("focus");
    });

    $("#calculate3").on("click", function () {
        let määrä = Number($("#amount3").val());
        let kerroin = Number($("[name=caljou3]:checked").val());
        let tulos = määrä * kerroin;
        let alkuyksikkö = $("[name=caljou3]:checked").attr("data-unit-in");
        let loppuyksikkö = $("[name=caljou3]:checked").attr("data-unit-in");
        $("#result3").html(määrä + alkuyksikkö + " = " + tulos.toFixed(0) + loppuyksikkö);
    });

    // 1. siirrä kohdistin valintanapista input-elementtiin

    $("#amount3").on("focusin", function () {
        $("#result3").html("");
        this.select();
    });

    // 2. kun input-elementti saa fokuksen, niin tyhjennetään tulos ja valitaan kaikki
    // merkit input-elementistä

    $("[name=caljou3]").on("click", function () {
        $("#amount3").trigger("focus");
    });

    $("#calculate4").on("click", function () {
        let luku1 = Number($("#num1").val());
        let luku2 = Number($("#num2").val());
        //kokoelma (collection), Node list js-puolella
        let rastit = $("[name=math]"); // rastit on jQueryn olio

        // yksi tapa tehdä toisto js-tapaan

        /* for (let i = 0; i < rastit.length; i++) {
            let rasti = rastit[i]; // rasti on html-olio
            // rastista jQuery-olio >> $
            if ($(rasti).prop("checked") === true) {
                // rasti on päällä
                let lasku = Number($(rasti).val());
                if (lasku === 1) {
                    let tulos = luku1 + luku2;
                    $("#result4").append(luku1 + " + " + luku2 + " = " + tulos + "<br>")
                }

                if (lasku === 3) {
                    let tulos = luku1 - luku2;
                    $("#result4").append(luku1 + " - " + luku2 + " = " + tulos + "<br>")
                }

                if (lasku === 2) {
                    let tulos = luku1 * luku2;
                    $("#result4").append(luku1 + " * " + luku2 + " = " + tulos + "<br>")
                }

            }
        } */

        // javascriptissä for each, jQueryssa each
        // rastien elementit yksi kerrallaan käsittelyyn

        rastit.each(function () {
            // this >> seuraava elementti käsittelyssä
            if ($(this).prop("checked") === true) {
                // rasti on päällä
                let lasku = Number($(this).val());
                if (lasku === 1) {
                    let tulos = luku1 + luku2;
                    $("#result4").append(luku1 + " + " + luku2 + " = " + tulos + "<br>")
                }

                if (lasku === 3) {
                    let tulos = luku1 - luku2;
                    $("#result4").append(luku1 + " - " + luku2 + " = " + tulos + "<br>")
                }

                if (lasku === 2) {
                    let tulos = luku1 * luku2;
                    $("#result4").append(luku1 + " * " + luku2 + " = " + tulos + "<br>")
                }

            }

        });

    });

    $("[name=math]").on("click", function () {
        $("#result4").html("");
    });

    $(".numbers").on("focusin", function () {
        $("#result4").html("");
    });

    $("[name=color_a]").on("click", function () {
        //kuljetaan html-puussa >> traversing
        $(this).parent().addClass("selected");

        //kaikille li-elementeille disabled = property, 
        //true >> päälle , false >> pois päältä
        // input > li > ul > kaikki li:t
        // kokoelma (collection), Node list
        let liElementit = $(this).parent().parent().children();

        liElementit.each(function () {
            // $(this) >> yksi li-elementti kerrallaan käsittelyyn
            // li >> lapset >> ensimmäinen >> disabled true
            $(this).children().first().prop("disabled", true);
        });
    });

    $("[name=color_b]").on("click", function () {
        $(this).parent().addClass("selected");
        $("[name=color_b]").prop("disabled", true);
    });

    $(".choice").on("click", function () {
        $(this).parent().addClass("selected");
        // [name=color_c] 
        let name_attribuutti = $(this).attr("name");
        let valinta = "[name=" + name_attribuutti + "]";
        $(valinta).prop("disabled", true);
    });

    $(".choice2").on("click", function () {
        //$(this).parent().parent().next().removeClass("not_visible")'
        let name_attribuutti = $(this).attr("name");
        // let esille = "[id=" + name_attribuutti + "]";
        let esille = "#" + name_attribuutti;
        $(esille).removeClass("not_visible");
    });

    $(".answer1").on("click", function () {
        let vastaus = Number($(this).attr("data_oikein"));
        // let vastaus = Number($(this).val());

        if (vastaus === 1) {
            //oikea
            $(this).parent().addClass("selected");
        } else {
            //väärä
            $(this).parent().addClass("wrong");
            // mikä on oikea? [name=XXXX][value=1]
            let name_attribuutti = $(this).attr("name");
            let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    })

});