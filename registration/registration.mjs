
let name;
let age;
console.log("%cregistration.mjs running", "color: blue;")
var UID1;
function saveInfo() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    age = Number(age);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    console.log("%cIt works", "color: blue;")
}
function redirectHub() {
    UID1 = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");



    if (UID1 !== 'undefined' && UID1 !== null ) {
        if(age>=5 && age <=100) {
            console.log("set")
            setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
            window.location.replace("../index.html");
        }, 1000);
        } else {
            alert("Please Enter A Valid Age")
        }
    } else {
        document.getElementById("statusMessage2").innerH ;   TML = "You Are Not Logged In With Google!";

    }


}
