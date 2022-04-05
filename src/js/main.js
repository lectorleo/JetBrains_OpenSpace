/*
let element = document.getElementById("check_1"); // get the element by id
element.style.color = "red";

let element2 = document.querySelector("p"); // get first the element by selector
let elements3 = document.querySelectorAll("p"); // get all elements by selector
//class selectors (".className"), id selectors ("#idName")

document.getElementById("myBtn").addEventListener("keypress", function() {
    // body
});
let element4 = document.getElementById("myBtn");
element4.addEventListener("keypress", function() {
    // body
});
document.addEventListener("click", function() {
    console.log("There's been a browser event");
});

 */
let setAttrDisabled = function () {
    document.querySelectorAll(".checkbox").        forEach(e => e.setAttribute("disabled", false));
    document.querySelectorAll(".range").           forEach(e => e.setAttribute("disabled", false));
    document.querySelector(".button_launch").      setAttribute("disabled", false);

}
let checkPassword = function() {
    let password = document.getElementById("password").value;
    if (password === "TrustNo1") {
        document.querySelectorAll(".checkbox").         forEach(e => e.removeAttribute("disabled")); //.forEach(e => e.removeAttribute("disabled"));
        document.querySelectorAll(".range").            forEach(e => e.removeAttribute("disabled"));

        document.querySelector(".password").            setAttribute("disabled", false);
        document.querySelector(".button_ok").setAttribute("disabled", false);
    } else {
    console.log("Incorrect password");
        //open("https://hyperskill.org/");
        alert("Incorrect password!  correct: TrustNo1");
       // confirm("Hyperskill is excellent"); //returns true if the OK button was pressed and false if the user clicked Cancel
    }
}

//let otherText = document.querySelectorAll('input[class="checkbox"]');
let checkStartReady = function() {
    let allCheck3 = document.querySelector('input[id="check_1"]').checked;
    let allCheck =
            document.querySelector(".chek_1").checked &&
            document.querySelector(".chek_2").checked &&
            document.querySelector(".chek_3").checked &&
            document.querySelector(".chek_4").checked &&
            document.querySelector(".chek_5").checked &&
            document.querySelector(".chek_6").checked &&
            (document.querySelector(".range_1").value >= 90) &&
            (document.querySelector(".range_2").value >= 90) &&
            (document.querySelector(".range_3").value >= 90) &&
            (document.querySelector(".range_4").value >= 90) &&
            (document.querySelector(".range_5").value >= 90);
    if (allCheck == true) {
        document.querySelector(".button_launch").removeAttribute("disabled");
        //alert(document.querySelector(".range_5").value);
    } else {
        document.querySelector(".button_launch").setAttribute("disabled", false);
        //alert(document.querySelector(".range_5").value);
    }
}
let startRocket = function() {
    document.getElementById("rocket").animate([
        // keyframes
        { transform: 'translateX(500px) translateY(-500px)' },
    ], {
        // timing options
        duration: 2000
    });
}
/*
document.getElementById("rocket").animate([
    // keyframes
    { transform: 'translateX(500px) translateY(-500px)' },
], {
    // timing options
    duration: 1000,
    //iterations: Infinity
});

 */