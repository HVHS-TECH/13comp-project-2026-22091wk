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
//var container
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
var once = 0;

/*******************************************************/
//const container
/*******************************************************/


/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(windowWidth - 4, windowHeight - 4);
    if (gameState == "intro") {
        UID = sessionStorage.getItem("UID");
        userName = sessionStorage.getItem("userName");
        if (UID == null) {
            window.location.replace("../registration/registration.html");
        }
    }
    else if (gameState == "play") {




    }
    else if (gameState == "lose") {
    }
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {

    playState();
}
function preload() {
	startText = loadImage('../assets/start_image.png');
	spaceshipModel = loadImage('../assets/spaceshipImage.gif')
	asteroidModel = loadImage('../assets/asteroid.png');
	coinModel = loadImage('../assets/coin.png')
	banner = loadImage('../assets/banner.png')



}
/*******************************************************/
// functions()
/*******************************************************/
// playstate()
// Called by draw()
// Holds the code for intro screen, instructions screen, play screen, and lose screen.
//
function playState() {
    if (gameState == "intro") {
        spawnProfilePicture();
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
function spawnProfilePicture() {
    if (profilePictureSpawned == false) {
        profilePicture = new Sprite(windowWidth/2, windowHeight/2-200, 170, 'd');
        profilePictureSpawned = true;
        profilePicture.image = "https://lh3.googleusercontent.com/a/ACg8ocJz9Ta2r5HIu1L3XnW2iQsoEfwR4x9V7KHCDknxz8-aP18vNtQ=s96-c";
        
    }
    
}
