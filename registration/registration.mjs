
let name;
let age;
let gender;
let dateOfBirth;
let phoneNumber;
let address;
let wonder;
console.log("%cregistration.mjs running", "color: blue;")
var UID;
function saveInfo() {
    name = document.getElementById("name").value;
    age = Number(document.getElementById("age").value);
    gender = document.getElementById("gender").value;
    dateOfBirth = document.getElementById("dateOfBirth").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    address = document.getElementById("address").value;
    wonder = document.getElementById("wonder").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("dateOfBirth", dateOfBirth);
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("wonder", wonder);
    console.log("%cIt works", "color: blue;")
    
}
function redirectHub() {
    UID = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");
    if (age < 5 || age > 100) {

        alert("Please Enter A Valid Age")
    }
    if (name == undefined || name == null || name.length > 20 || name.trim() == "") {
        alert("Please Enter A Valid Name")
    }
    if (gender == "") {

        alert("Please select a gender")
    }
    if (dateOfBirth == "") {

        alert("Please Enter A Date Of Birth")
    }
    if (phoneNumber.length !== 11) {

        alert("Please Enter A Valid Phone Number")
    }
    if (address.trim() == "") {

        alert("Please Enter A address")
    }
    if (wonder == "") {

        alert("Please Select Your Favourite Within The 7 Wonders Of The World")
    }

    if (UID !== undefined) {
        if (age >= 5 &&
            age <= 100 &&
            name !== undefined &&
            name !== null &&
            name.trim() !== "" &&
            name.length <= 20 &&
            name.length >= 5 &&
            gender !== "" &&
            dateOfBirth !== "" &&
            phoneNumber.length == 11 &&
            address.trim() !== "" &&
            wonder !== ""



        ) {
            console.log("LETSSS GOOOO")
            setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
                window.location.replace("../index.html");
            }, 1000);
        }

    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }


}
