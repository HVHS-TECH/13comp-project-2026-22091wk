
let name;
let age;
console.log("%cregistration.mjs running", "color: blue;")
var UID;
function saveInfo() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    age = Number(age);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    console.log("%cIt works", "color: blue;")
}
function redirectHub() {
    UID = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");

    if (UID !== 'undefined' && UID !== null ) {
        if(age>=5 && age <=100 && name !=='undefined' && name !== null) {
            console.log("LETSSS GOOOO")
            setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
            window.location.replace("../index.html");
        }, 1000);
        } else {
            alert("Please Enter A Valid Age & Name")
        }
    } else {
        document.getElementById("statusMessage2").innerH ;   TML = "You Are Not Logged In With Google!";

    }


}
