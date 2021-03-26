//yksittäinen tooltip: etsi elementti, tee siitä BT:n Tooltip-olio
/* let exampleEl = document.getElementById('esim')
let tooltip = new bootstrap.Tooltip(exampleEl) */

/* *******************************************
* TOOLTIP
********************************************** */
// tämä tekee NodeListin (kokoelma)
// let testi = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// tekee taulukon (Array) elementeistä
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// tekee jokaisesta taulukon elementistä BT:n Tooltip-olion,
// jolla on tarvittavat metodit (funktiot) ja tapahtumakuuntelijat (hover)
// oliot menevät muuttujaan tooltipList
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* POPOVER
**************************************** */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


/* **********************************
* MODAL-IKKUNA
****************************************** */
function message1() {
    let myModal = new bootstrap.Modal(document.getElementById('mymessage'))
    myModal.show();
}

function message2() {
    let myModal = new bootstrap.Modal(document.getElementById('mymessage'),
        {backdrop: "static"}
    )
    myModal.show();
}

function message3() {
    document.getElementById("m_title").innerHTML = "Tässä on oma otsikko";
    document.getElementById("m_body").innerHTML = "Tässä on oma teksti ja <br>toinenkin rivi."
    
    let myModal = new bootstrap.Modal(document.getElementById('mymessage'),
        {backdrop: "static"}
    )
    myModal.show();
}