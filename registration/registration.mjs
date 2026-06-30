
let name;
let age=0;
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
    if(age<5 || age >100) {
        
            alert("Please Enter A Valid Age")
        }
    if(name == undefined|| name == null || name.length>20 || name.trim() == "") {
            alert("Please Enter A Valid Name")
        }

    if (UID !== null ) {
        if(age>=5 && age <=100 && name !==undefined && name !== null && name.trim() !== "") {
            console.log("LETSSS GOOOO")
            setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
            window.location.replace("../index.html");
        }, 1000);
        }
        
    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }


}
