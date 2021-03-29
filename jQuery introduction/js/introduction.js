/// <reference path="jquery-3.6.0.min.js" />
$(function () {
    // tähän väliin kirjoitetaan js-koodi

    // id:n perusteella click-tapahtuma
    $("#calculate1").on("click", function() {
        // luetaan input-elementistä muuttujaan numeerisena
        let kalorit = Number($("#amount1").val());
        let joulet = kalorit * 4.184;
        $("#result1").html(joulet.toFixed(0) + " J");

    });

    $("#amount1").on("focusin", function() {
        $("#result1").html(""); //tyhjentää tulostusalueen
        // this >> elementti, josta tapahtuma tuli
        // this >> valitsee kaikki; js oma funktio ei käytetä $
        this.select();
    });

    $("#calculate2").on("click", function() {
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

    $("#amount2").on("focusin", function() {
        $("#result2").html("");
        this.select();
    });

    $("[name=caljou2]").on("click", function() {
        //siirretään fokus input-elementtiin
        $("#amount2").trigger("focus");
    });

    $("#calculate3").on("click", function(){
        let määrä = Number($("#amount3").val());
        let kerroin = Number($("[name=caljou3]:checked").val());
        let tulos = määrä * kerroin;
        let alkuyksikkö = $("[name=caljou3]:checked").attr("data-unit-in");
        let loppuyksikkö = $("[name=caljou3]:checked").attr("data-unit-in");
        $("#result3").html(määrä + alkuyksikkö + " = " + tulos.toFixed(0) + loppuyksikkö);
    });

    // 1. siirrä kohdistin valintanapista input-elementtiin

    $("#amount3").on("focusin", function(){
        $("#result3").html("");
        this.select();
    });
    
    // 2. kun input-elementti saa fokuksen, niin tyhjennetään tulos ja valitaan kaikki
    // merkit input-elementistä
    
    $("[name=caljou3]").on("click", function(){
        $("#amount3").trigger("focus");
        });
});