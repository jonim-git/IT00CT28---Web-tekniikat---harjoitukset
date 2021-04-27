$(function () {
    /**
     * Calculates the body mass index.
     * @param {number} height in cm
     * @param {number} weight in kg
     * @returns {number} body mass index
     */

    function getBMI(height, weight) {
        let BMI = (weight / (Math.pow(height / 100, 2.5))) * 1.3
        return Number(BMI.toFixed(1))

    }

    /**
     * Calculates upper and lower bounds for the normal weight.
     * 
     * @param {number} value Person's height in cm.
     * @param {number} factor 18.5 >> lower bound, 24.9 >> upper bound
     * @returns {number} Normal weight bound as integer
     */

    function getWeightLimit(value, factor) {
        let limit = (factor / 1.3) * Math.pow(value / 100, 2.5)
        limit = limit.toFixed(0)
        return limit;
    }

    $('[data-toggle="popover"]').popover();


    $("#BMI").on("click", function () {
        let height = Number($("#height").val())
        let weight = Number($("#weight").val())
        let result = getBMI(height, weight)

        if (result < 17) {
            $("#exp_1").addClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").removeClass("tausta")

        }

        if (result > 16.9 && result < 18.5) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").addClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").removeClass("tausta")
        }

        if (result > 18.4 && result < 25) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").addClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").removeClass("tausta")
        }

        if (result > 24.9 && result < 30) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").addClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").removeClass("tausta")
        }

        if (result > 29.9 && result < 35) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").addClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").removeClass("tausta")
        }

        if (result > 34.9 && result < 40) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").addClass("tausta")
            $("#exp_7").removeClass("tausta")
        }

        if (result >= 40) {
            $("#exp_1").removeClass("tausta")
            $("#exp_2").removeClass("tausta")
            $("#exp_3").removeClass("tausta")
            $("#exp_4").removeClass("tausta")
            $("#exp_5").removeClass("tausta")
            $("#exp_6").removeClass("tausta")
            $("#exp_7").addClass("tausta")
        }
        if ($("#weightRange").prop("checked") === true) {
            let normalMin = getWeightLimit(height, 18.5)
            let normalMax = getWeightLimit(height, 24.9)
            $("#normalWeight").html(normalMin + " - " + normalMax)

        }

        $("#bmi").html(result)
    })

    $("#waistControl").on("click", function () {
        let waist = Number($("#waist").val())
        let gender = Number($("[name=gender]:checked").val())

        if (gender === 1 && waist < 90) {
            $("#risk_1").addClass("tausta")
            $("#risk_2").removeClass("tausta")
            $("#risk_3").removeClass("tausta")
        } else if (gender === 2 && waist < 80) {
            $("#risk_1").addClass("tausta")
            $("#risk_2").removeClass("tausta")
            $("#risk_3").removeClass("tausta")
        }

        if (gender === 1 && waist >= 90) {
            $("#risk_1").removeClass("tausta")
            $("#risk_2").addClass("tausta")
            $("#risk_3").removeClass("tausta")
        } else if (gender === 2 && waist >= 80) {
            $("#risk_1").removeClass("tausta")
            $("#risk_2").addClass("tausta")
            $("#risk_3").removeClass("tausta")
        }

        if (gender === 1 && waist > 100) {
            $("#risk_1").removeClass("tausta")
            $("#risk_2").removeClass("tausta")
            $("#risk_3").addClass("tausta")
        } else if (gender === 2 && waist > 90) {
            $("#risk_1").removeClass("tausta")
            $("#risk_2").removeClass("tausta")
            $("#risk_3").addClass("tausta")
        }
    })
    //focus-tapahtumat
    $("[name=BMI]").on("focusin", function () {
        this.select();
        $("#bmi").html("");
        $("#exp_1").removeClass("tausta")
        $("#exp_2").removeClass("tausta")
        $("#exp_3").removeClass("tausta")
        $("#exp_4").removeClass("tausta")
        $("#exp_5").removeClass("tausta")
        $("#exp_6").removeClass("tausta")
        $("#exp_7").removeClass("tausta")
    });

    $("#waist").on("focusin", function () {
        this.select()
        $("#risk_1").removeClass("tausta")
        $("#risk_2").removeClass("tausta")
        $("#risk_3").removeClass("tausta")
    });

    $("[name=gender]").on("click", function () {
        $("#waist").trigger("focus");
        $("#waist").val("");
    });
    //iän lasku
    function age() {
        let date = new Date()
        let year = date.getFullYear()
        return year - this._birthYear
    }

    /**
     * Check that all input data is written. Show the error message.
     * @returns (Boolean) true >> ok, false >> not ok
     */
    

        let fields = Number($("[name=BMI]").val("oujea"))
        if (fields === "") {
            /* "näytä modalikkuna" - koodi tähän */
            return false;
        }

        else if (fields === 1 && age < 20 || age > 60) {

        }




    }

    //modal-ikkunat

    function input() {
        let myModal = new bootstrap.Modal(document.getElementById('missingInput'))
        myModal.show();
    }

    function ageNote() {
        let myModal = new bootstrap.Modal(document.getElementById('ageNotification'),
            { backdrop: "static" }
        )
        myModal.show();
    }

})
