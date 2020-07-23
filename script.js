const BILLAMT = document.querySelector("#billamt")
// const BILLAMT = document.getElementById("billamt")
const CALLBUTTON = document.querySelector("#calculate")
var NUMPEOPLE = document.querySelector("#people-amt")
const SERVQUALITY = document.querySelector("#service-quality")

document.querySelector("#totalTip").style.display="none"

document.querySelector("#each").style.display="none"

function calculateTip(){
    
    if(BILLAMT.value===""||SERVQUALITY.value===0){
        alert("Please Enter Valid Values")
        return;
    }

    if(NUMPEOPLE.value=== "" || NUMPEOPLE.value<=1){
        NUMPEOPLE.value=1;    
        document.querySelector("#each").style.display = "none"
    }else{
        document.querySelector("#each").style.display = "block"
    }

    //Calculation
    var total = (BILLAMT.value * SERVQUALITY.value)/(NUMPEOPLE.value)
    total=total.toFixed(2)

    // Display tip amount
    document.querySelector("#totalTip").style.display = "block"
    document.querySelector("#tip").innerHTML = total;

}

CALLBUTTON.addEventListener("click", calculateTip)