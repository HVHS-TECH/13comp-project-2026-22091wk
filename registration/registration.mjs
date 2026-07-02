
let name;
let age;
let gender;
let pasta;
let phoneNumber;
let address;
let wonder;
console.log("%cregistration.mjs running", "color: blue;")
var UID;
function saveInfo() {
    name = document.getElementById("name").value;
    age = Number(document.getElementById("age").value);
    gender = document.getElementById("gender").value;
    pasta = document.getElementById("pasta").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    address = document.getElementById("address").value;
    wonder = document.getElementById("wonder").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("pasta", pasta);
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("wonder", wonder);
    console.log("%cIt works", "color: blue;")

}
function redirectHub() {
    UID = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");
    
    if (name == undefined || name == null || name.length > 20 || name.trim() == "") {
        alert("Please Enter A Valid Name")
        return;
    }
    if (age < 5 || age > 100) {

        alert("Please Enter A Valid Age")
        return;
    }
    if (gender == "") {

        alert("Please select a gender")
        return;
    }
    if (pasta == "") {

        alert("Please Enter A pasta")
        return;
    }
    if (phoneNumber.length != 11 && phoneNumber.length != 10 && phoneNumber.length != 9 && phoneNumber.length != 8) {

        alert("Please Enter A Valid Phone Number")
        return;
    }
    if (address.trim() == "") {

        alert("Please Enter A address")
        return;
    }
    if (wonder == "") {

        alert("Please Select Your Favourite Within The 7 Wonders Of The World")
        return;
    }

    if (UID !== null) {

        console.log("LETSSS GOOOO")
        setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
            window.location.replace("../index.html");
        }, 1000);


    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }


}
