/*******************************************************/
// My Game   Far Lands
// Written by William Kan
// Date: who knows its been too long help
/*******************************************************/
/*******************************************************/

//import {
//	fb_write
//} from './fb_io.mjs';
/*******************************************************/
//let container
/*******************************************************/
let gameState = "intro";
let startImage;
let startText;
let spaceshipModel;
let asteroidModel;
let coinModel;
let banner;
let clickedCounter = 0;
let asteroidSpawingLocationY = 0;
let borderSpawned = false;
let spaceshipSpawned = false;
let asteroidSpawningChance = 0;
let coinSpawningChance = 0;
let profilePictureSpawned = false;
let score = 0;
let lives = 5
let checkLives = true
let coinSpawingLocationY;
let gameStateChanged = 0;
let particleMovementX;
let particleMovementY;
let particlesSpawningAmount;
let particlesSpawningPart;
let playtext1;
let playtext2;
let UID;
let userName;
let once1 = 0;
let once2 = 0
let onceCreate = 0;
/*******************************************************/
//const container
/*******************************************************/


/*******************************************************/
function setup() {
    console.log("setup: ");
    spawnDefaultProfilePicture();
    if (gameState == "intro") {
        UID = sessionStorage.getItem("UID");
        userName = sessionStorage.getItem("userName");

        // if (UID == null) {
        //     window.location.replace("../registration/registration.html");
        // }
    }
    else if (gameState == "play") {
    }
    else if (gameState == "lose") {
    }
}

/*******************************************************/
// draw()
/*******************************************************/

/*******************************************************/
// functions()
/*******************************************************/
// playstate()
// Called by draw()
// Holds the code for intro screen, instructions screen, play screen, and lose screen.
//
function playState() {
    if (gameState == "intro") {
        gameStateChanger1();
    }
    else if (gameState == "instructions") {
        instructionsText();
        gameStateChanger2();
    }
    else if (gameState == "play") {

    }
    else if (gameState == "lose") {
        loseScreenText();
        if (once == 0) {
            sessionStorage.setItem("score", score);
            fb_writeFarLands()
            once = 1;
        }
        home();
    }
}
function gameStateChanger1() {
    if (clickedCounter == 1) {
        gameState = "instructions";
    }
}

//******************* */
// gameStateChanger2()
// Called by gameState()
// Changes the gameState from instructions to play 
//******************* */
function gameStateChanger2() {
    if (clickedCounter == 2) {
        gameState = "play";
    }
}
//******************* */
// gameStateChanger3()
// Called by gameState()
// Changes the gameState from play to lose
//******************* */
function gameStateChanger3() {
    if (gameStateChanged < 1) {
        if (lives <= 0) {
            gameState = "lose";
            gameStateChanged = 1;
        }
    }
}

function spawnDefaultProfilePicture() {

    console.log("this is running")

    if (once2 == 0) {
        once2 = 1;
        // profilePicture = new Sprite(windowWidth / 2 - 350, windowHeight / 2 - 200, 170, 'd');
        // profilePicture.image = defaultprofile;
        // profilePicture.image.resize(400, 400)

        document.getElementById("hostWaiting").innerHTML = "Create or Join a Lobby";
        // hostGroup.add(profilePicture)

        // profilePicture2 = new Sprite(windowWidth / 2 + 350, windowHeight / 2 - 200, 170, 'd');
        // profilePicture2.image = defaultprofile;
        // profilePicture2.image.resize(400, 400)
        // playerGroup.add(profilePicture2)
        console.log("this works");

    } else if (once2 == 1) {
        // profilePicture.remove()
        console.log("it has been deleted");
    }
}
// function spawnProfilePicture() {
//  profilePicture.remove()
//  console.log("removed")
//     console.log(hostGroup)
//     var hostProfilePicture = sessionStorage.getItem("hostProfile");
//     if(hostProfilePicture =! null) {
//    hostGroup.image = hostProfilePicture;
//     }
// }
