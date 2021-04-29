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
    // värien reset-funktiot

    function resetColors() {
        $("#exp_1").removeClass("tausta")
        $("#exp_2").removeClass("tausta")
        $("#exp_3").removeClass("tausta")
        $("#exp_4").removeClass("tausta")
        $("#exp_5").removeClass("tausta")
        $("#exp_6").removeClass("tausta")
        $("#exp_7").removeClass("tausta")
    }

    function resetColors2() {
        $("#risk_1").removeClass("tausta")
        $("#risk_2").removeClass("tausta")
        $("#risk_3").removeClass("tausta")
    }
    //pop-over
    $('[data-toggle="popover"]').popover();

    //BMI-nappi
    $("#BMI").on("click", function () {
        if (validateInput() === false) {
            return;
        }

        let height = Number($("#height").val())
        let weight = Number($("#weight").val())
        let result = getBMI(height, weight)
        resetColors()

        if (result < 17) {
            $("#exp_1").addClass("tausta")
        }

        if (result > 16.9 && result < 18.5) {

            $("#exp_2").addClass("tausta")

        }

        if (result > 18.4 && result < 25) {
            $("#exp_3").addClass("tausta")
        }

        if (result > 24.9 && result < 30) {
            $("#exp_4").addClass("tausta")
        }

        if (result > 29.9 && result < 35) {
            $("#exp_5").addClass("tausta")

        }

        if (result > 34.9 && result < 40) {
            $("#exp_6").addClass("tausta")
        }

        if (result >= 40) {
            $("#exp_7").addClass("tausta")
        }
        if ($("#weightRange").prop("checked") === true) {
            let normalMin = getWeightLimit(height, 18.5)
            let normalMax = getWeightLimit(height, 24.9)
            $("#normalWeight").html(normalMin + " - " + normalMax)
        }

        $("#bmi").html(result)
    })
    
    //waist-nappi
    $("#waistControl").on("click", function () {
        let waist = Number($("#waist").val())
        let gender = Number($("[name=gender]:checked").val())
        resetColors2()

        if (gender === 1 && waist < 90) {
            $("#risk_1").addClass("tausta")
        } else if (gender === 2 && waist < 80) {
            $("#risk_1").addClass("tausta")
        }

        if (gender === 1 && waist >= 90) {
            $("#risk_2").addClass("tausta")
        } else if (gender === 2 && waist >= 80) {
            $("#risk_2").addClass("tausta")
        }

        if (gender === 1 && waist > 100) {
            $("#risk_3").addClass("tausta")
        } else if (gender === 2 && waist > 90) {
            $("#risk_3").addClass("tausta")
        }
    })

    //focus-tapahtumat
    $("[name=BMI]").on("focusin", function () {
        this.select();
        resetColors()
        $("#bmi").html("");
    });

    $("#waist").on("focusin", function () {
        this.select()
        resetColors2()
    });

    $("[name=gender]").on("click", function () {
        $("#waist").trigger("focus");
        $("#waist").val("");
    });

    /**
     * Check that all input data is written. Show the error message.
     * @returns (Boolean) true >> ok, false >> not ok
     */

    function validateInput() {
        let birthYear = Number($("#birthYear").val())
        let weight = Number($("#weight").val())
        let height = Number($("#height").val())
        //lasketaan ikä

        /* let fields = Number($("[name=BMI]").val()) */

        if (birthYear === 0) {
            checkInput()
            return false;
        }

        if (weight === 0) {
            checkInput()
            return false;
        }

        if (height === 0) {
            checkInput()
            return false;

        } else {

            let date = new Date()
            let current_year = date.getFullYear()
            let age = current_year - birthYear

            if (age < 20 || age > 60) {
                ageNote()
                return true;
            }
            return true;
        }
    }

    //modal-ikkunat

    function checkInput() {
        document.getElementById("m_title").innerHTML = "Missing input";
        document.getElementById("m_body").innerHTML = "You need to write all input data."

        let myModal = new bootstrap.Modal(document.getElementById('myModal'),
            { backdrop: "static" }
        )
        myModal.show();
    }

    function ageNote() {

        document.getElementById("m_title").innerHTML = "Note the age"
        document.getElementById("m_body").innerHTML = "BMI results are for persons aged 20-60."

        let myModal = new bootstrap.Modal(document.getElementById('myModal'),
            { backdrop: "static" }
        )
        myModal.show();
    }

})
