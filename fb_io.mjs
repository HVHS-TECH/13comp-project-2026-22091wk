let fb_gamedb;
let userUID;
let username;
let userDisplayName;
let userProfilePicture;
let leaderboard1;
let newScoreValid;
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
let userState
let lobbyID;
let lobbyIDCreate1 = 0
let onceCreate = 0;
let gameStarted = false;
let myTurn = false;
function preload() {
    startText = loadImage('assets/start_image.png');
    spaceshipModel = loadImage('assets/spaceshipImage.gif')
    asteroidModel = loadImage('assets/asteroid.png');
    coinModel = loadImage('assets/coin.png')
    banner = loadImage('assets/banner.png')
    defaultprofile = loadImage('assets/defaultProfilePicture.png')



}


/**************************************************************/
// Importing all external constants & functions here
/**************************************************************/
//import { initializeApp, getDatabase, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, ref, set, get, update }
//    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, query, orderByChild, limitToFirst, onValue, remove }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


/**************************************************************/
// Exporting functions to be used in main.mjs
/**************************************************************/
export {
    fb_initialise, fb_authenticate, fb_start, fb_writeFarLands, fb_writeCoinGame, fb_read_sortedFL, fb_read_sortedCG, createProfile,
    infoRegistration, fb_writeAuth, checkUID,

    //Guess The Number Export
    createLobby, joinLobby, guess
};
function fb_start() {
    fb_initialise()
    checkUID();

}
async function fb_initialise() {
    console.log('%c fb_initialise(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const firebaseConfig = {
        apiKey: "AIzaSyCttBxOg7c8gFwt2lvB639v8viidWrVnYM",
        authDomain: "refresh-c5e63.firebaseapp.com",
        databaseURL: "https://refresh-c5e63-default-rtdb.firebaseio.com",
        projectId: "refresh-c5e63",
        storageBucket: "refresh-c5e63.firebasestorage.app",
        messagingSenderId: "642080257991",
        appId: "1:642080257991:web:ed25909b7ec79b721d0be2",
        measurementId: "G-92VEN9VD93"
    };
    // Initialize Firebase
    const FB_GAMEAPP = initializeApp(firebaseConfig);
    fb_gamedb = getDatabase(FB_GAMEAPP);
    console.info(fb_gamedb);


}
function checkUID() {
    userUID = sessionStorage.getItem("UID");
    if (userUID == null) {
        window.location.replace("../registration/registration.html");

    }
}
async function fb_authenticate() {
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    // Create a popup window to sign in
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("photo ", result.user.photoURL);
        console.log("email ", result.user.email);
        console.log("display name ", result.user.displayName);
        console.log("uid ", result.user.uid);
        userUID = result.user.uid;
        userDisplayName = result.user.displayName;
        userProfilePicture = result.user.photoURL;
        sessionStorage.setItem("UID", userUID);
        console.log(userUID)
        const path = "details/users/" + userUID;

        const dbReference = ref(fb_gamedb, path);
        get(dbReference).then((snapshot) => {
            if (snapshot.exists()) {
                window.location.replace("../index.html");
                console.log("u already created an account")
            } else {
                console.log("go sign up buddy")
                fb_writeAuth();
            }
        })
    }).catch((error) => {
        console.log("error authenticating: " + error);
        // document.getElementById("p_fbAuthenticate").innerHTML = "Failled Authenticating";
    });

}
function fb_writeAuth() {
    console.log(userUID);
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("Signed in as:", user.uid);

        } else {
            console.log("Not signed in");
        }
    });
    const dbReference = ref(fb_gamedb, "details/users/" + userUID);

    update(dbReference, { UID: userUID, userDisplayName: userDisplayName, userProfilePicture: userProfilePicture }).then(() => {
        console.log("update very successful");


    }).catch((error) => {
        console.log("error  " + error)
    });


    //  const dbReference = ref(fb_gamedb, ('Games/FarLands/Users/' + userUID));

    //  set(dbReference, { Score: Number(score), Name: userName }).then(() => {
    //     console.log("write successful");
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //   }).catch((error) => {
    //       console.log("error:  " + error);
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //    });
}
function fb_writeFarLands() {
    let score;
    score = sessionStorage.getItem("score");
    userUID = sessionStorage.getItem("UID");
    console.log(score);
    console.log(fb_gamedb);
    console.log(userUID);
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("Signed in as:", user.uid);
        } else {
            console.log("Not signed in");
        }
    });
    const dbReference = ref(fb_gamedb, "Games/FarLands/Users/" + userUID);

    update(dbReference, { Score: Number(score) }).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });


    //  const dbReference = ref(fb_gamedb, ('Games/FarLands/Users/' + userUID));

    //  set(dbReference, { Score: Number(score), Name: userName }).then(() => {
    //     console.log("write successful");
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //   }).catch((error) => {
    //       console.log("error:  " + error);
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //    });
}
function fb_writeCoinGame() {
    let score;
    score = sessionStorage.getItem("score");
    userUID = sessionStorage.getItem("UID");
    console.log(score);
    console.log(fb_gamedb);
    console.log(userUID);
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("Signed in as:", user.uid);
        } else {
            console.log("Not signed in");
        }
    });
    const dbReference = ref(fb_gamedb, "Games/CoinGame/Users/" + userUID);

    update(dbReference, { Score: Number(score) }).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });

    //  const dbReference = ref(fb_gamedb, ('Games/FarLands/Users/' + userUID));

    //  set(dbReference, { Score: Number(score), Name: userName }).then(() => {
    //     console.log("write successful");
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //   }).catch((error) => {
    //       console.log("error:  " + error);
    //document.getElementById("p_fbWriteRec").innerHTML = "Successful";

    //    });
}
function fb_read_sortedFL() {
    let sortKey = "Score";
    const dbReference = query(ref(fb_gamedb, "Games/FarLands/Users"), orderByChild(sortKey), limitToFirst(3));
    get(dbReference).then((Snapshot) => {
        Snapshot.forEach(function (userScoreSnapshot) {
            let fb_data = userScoreSnapshot.val();
            if (fb_data != null) {
                console.log(fb_data.Score)
                leaderboard1 = fb_data
                console.log(leaderboard1)
                sessionStorage.setItem("data1", leaderboard1);

                const auth = getAuth();
                auth.onAuthStateChanged(user => {
                    if (user) {
                        console.log("Signed in as:", user.uid);
                    } else {
                        console.log("Not signed in");
                    }
                });

            } else {
                console.log("something went wrong")
            }
        });



    }).catch((error) => {
        console.log(error)
    });
}

function fb_read_sortedCG() {
    let sortKey = "Score";
    const dbReference = query(ref(fb_gamedb, "Games/CoinGame/Users"), orderByChild(sortKey), limitToFirst(3));
    get(dbReference).then((Snapshot) => {
        Snapshot.forEach(function (userScoreSnapshot) {
            let fb_data = userScoreSnapshot.val();
            if (fb_data != null) {
                console.log(fb_data.Score);
                leaderboard1 = fb_data;
                console.log(leaderboard1);
                sessionStorage.setItem("data1", leaderboard1);

                const auth = getAuth();
                auth.onAuthStateChanged(user => {
                    if (user) {
                        console.log("Signed in as:", user.uid);
                    } else {
                        console.log("Not signed in");
                    }
                });

            } else {
                console.log("something went wrong");
            }
        });



    }).catch((error) => {
        console.log(error)
    });


}
function createProfile() {
    const name = sessionStorage.getItem("name")
    const dbReference = ref(fb_gamedb, "Leaderboard/" + userUID);

    update(dbReference, { Name: name, flScore: 0, cgScore: 0, gtnWins: 0, gtnLosses: 0 }).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });



}
function infoRegistration() {
    const dbReference = ref(fb_gamedb, "details/users/" + userUID);
    let age = sessionStorage.getItem("age")
    const name = sessionStorage.getItem("name")


    update(dbReference, { Age: Number(age), Name: name }).then(() => {
        console.log("update successful2");


    }).catch((error) => {
        console.log("error  " + error)
    });
}

function createProfileCG() {
    const name = sessionStorage.getItem("name")
    const dbReference = ref(fb_gamedb, "Games/CoinGame/Users/" + userUID);

    update(dbReference, { Name: name }).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });



}
function fb_listener(_path, _function) {
    const dbReference = ref(fb_gamedb, _path);
    function andThen(snapshot) {
        _function(snapshot.val())
    }
    onValue(dbReference, andThen)
}
function fb_write(_path, _label, _information) {
    const dbReference = ref(fb_gamedb, _path);

    set(dbReference, { [_label]: _information }).then(() => {
        console.log("very successful");


    }).catch((error) => {
        console.log("error  " + error)
    });
}
function fb_update(_path, _information) {
    const dbReference = ref(fb_gamedb, _path);

    update(dbReference, _information).then(() => {
        console.log("very successful");


    }).catch((error) => {
        console.log("error  " + error)
    });
}
async function fb_readRecord(_path, _returnlabel) {
    const dbReference = ref(fb_gamedb, _path);
    const snapshot = get(dbReference);
    let fb_data = (await snapshot).val();
    if (fb_data != null) {
        //success
        console.log("Data: ", fb_data);
        return (fb_data[_returnlabel]);
    } else {
        // no record found
        console.log("no record found -read")
    }
}
async function fb_listenerOff(_path) {
    const dbReference = ref(fb_gamedb, _path)
    off(dbReference);
}
/**************************************************************/
// First GTN Functionstest
/**************************************************************/
/**************************************************************/
// Creating the lobby in firebase
/**************************************************************/

async function lobbyJoinCode() {
    if (lobbyIDCreate1 == 0) {
        // const userUID = sessionStorage.getItem("UID");
        let lobbyID = Math.ceil(Math.random() * 1000000);
        //lobbyID = lobbyID + userUID;
        lobbyIDCreate1 = 1;
        console.log(lobbyID);
        return lobbyID;
    }

}
async function createLobby() {
    if (onceCreate == 0) {
        onceCreate = 1;
        const userUID = sessionStorage.getItem("UID");
        const name = await fb_readRecord("details/users/" + userUID, "Name");
        console.log("this is the data ", name);
        sessionStorage.setItem(onceCreate, onceCreate)
        console.log(userUID);
        lobbyID = await lobbyJoinCode();
        console.log(name);
        const dbReference = ref(fb_gamedb, "Games/guessTheNumber/lobbies/" + lobbyID);
        await set(dbReference, { Guess: "NONE", GuessedBy: "NONE", active: "NO", Turn: "NONE", player2: "NONE", playerName2: "NONE", player1: userUID, playerName1: name, lobby: lobbyID }).then(() => {
            console.log("very successful");
            document.getElementById("displayJoinCode").innerHTML = "Lobby join code: " + lobbyID;
            console.log(lobbyID, "Games/guessTheNumber/lobbies/" + lobbyID + "/")
            const path = "Games/guessTheNumber/lobbies/" + lobbyID + "/";
            fb_listener(path, gamePlayer1);
        }).catch((error) => {
            console.log("error  " + error)
        });
    }
}



async function joinLobby() {
    if (onceCreate == 0) {
        console.log("function should be running");
        userUID = sessionStorage.getItem("UID");
        console.log("This is your UID " + userUID);
        lobbyID = document.getElementById("joinCode").value
        console.log(lobbyID)
        const name = await fb_readRecord("details/users/" + userUID, "Name");
        const dbReference = ref(fb_gamedb, "Games/guessTheNumber/lobbies/" + lobbyID);
        get(dbReference).then(async (snapshot) => {
            let fb_data = snapshot.val();
            if (fb_data != null) {
                let player2 = fb_data.player2
                console.log(player2);

                if (player2 == "NONE") {
                    const path = "Games/guessTheNumber/lobbies/" + lobbyID;
                    console.log(path)
                    fb_update(path, { "player2": userUID, "playerName2": name });
                    console.log("player 2 added as", name);
                    document.getElementById("gameArea").style.display = "block"
                    document.getElementById("lobbyArea").style.display = "none"
                    const playerName1 = await fb_readRecord(path, "playerName1");
                    document.getElementById("playerVsPlayer").innerHTML = name + " vs " + playerName1;

                    fb_listener(path, gamePlayer2);

                }

            } else {
                console.log("um")
            }
        }).catch((error) => {
            console.log("error:  " + error);
        });

    }
}
async function gamePlayer1(lobbyDataObject) {
    const dbReference = ref(fb_gamedb, "Games/guessTheNumber/lobbies/" + lobbyDataObject.lobby);
    if (lobbyDataObject.player2 !== "NONE" && gameStarted == false) {
        console.log(lobbyDataObject.player2);
        console.log(lobbyDataObject.playerName2);
        gameStarted = true;
        await update(dbReference, { active: "yep", Number: Math.ceil(Math.random() * 100), Turn: lobbyDataObject.player1, Winner: "NONE", }).then(async () => {
            sessionStorage.setItem("guess", "NONE");
            console.log("game started");
            document.getElementById("gameArea").style.display = "block";
            document.getElementById("lobbyArea").style.display = "none";
            console.log(lobbyDataObject.playerName1, lobbyDataObject.playerName2);
            document.getElementById("playerVsPlayer").innerHTML = lobbyDataObject.playerName1 + " vs " + lobbyDataObject.playerName2;


        }).catch((error) => {
            console.log("error  " + error)
        });
    }
    console.log(gameStarted);
    if (gameStarted == true) {
        if (lobbyDataObject.Turn == userUID) {
            console.log("It is my turn");
            document.getElementById("playerTurn").innerHTML = "It is your turn";
            myTurn = true;
            console.log("myTurn " + myTurn)
        }
        if (lobbyDataObject.Guess == lobbyDataObject.Number && lobbyDataObject.player1 == lobbyDataObject.Turn) {
            fb_update("Games/guessTheNumber/lobbies/" + lobbyID, { Winner: lobbyDataObject.player1 });
            document.getElementById("playerVsPlayer").innerHTML = "YOU WIN";
            console.log("yep the 1rd if line is running" + lobbyDataObject.Turn);
            myTurn = false;

        } else if (lobbyDataObject.Guess == lobbyDataObject.Number && lobbyDataObject.player2 == lobbyDataObject.Turn) {
            fb_listenerOff("Games/guessTheNumber/lobbies/" + lobbyID);
            document.getElementById("playerVsPlayer").innerHTML = "YOU LOSE";
            console.log("yep the 2rd if line is running" + lobbyDataObject.Turn);
            myTurn = false;

        } else if (lobbyDataObject.player1 == lobbyDataObject.Turn && lobbyDataObject.Guess !== lobbyDataObject.Number && lobbyDataObject.GuessedBy == lobbyDataObject.player1) {
            fb_update("Games/guessTheNumber/lobbies/" + lobbyID, { Turn: lobbyDataObject.player2 });
            console.log("yep the 3rd if line is running" + lobbyDataObject.Turn);
            document.getElementById("playerTurn").innerHTML = "Waiting for " + lobbyDataObject.playerName2 + " to take their turn";
            myTurn = false;
        }

    }
    if (lobbyDataObject.Guess > lobbyDataObject.Number) {
        console.log("works1");
        document.getElementById("feedback").innerHTML = "The number is lower than " + lobbyDataObject.Guess;
    } else if (lobbyDataObject.Guess < lobbyDataObject.Number) {
        console.log("works2");
        document.getElementById("feedback").innerHTML = "The number is higher than " + lobbyDataObject.Guess;
    }
    if (lobbyDataObject.Winner == lobbyDataObject.player1) {
        let wins = await fb_readRecord("Leaderboard/" + userUID, Wins)
        wins = wins + 1;
        await fb_update("Leaderboard/" + userUID, { "Wins": wins });
    }
}
async function gamePlayer2(lobbyDataObject) {

    const dbReference = ref(fb_gamedb, "Games/guessTheNumber/lobbies/" + lobbyDataObject.lobby);
    if (lobbyDataObject.active !== "NONE" && gameStarted == false) {
        gameStarted = true;
        await update(dbReference, { Turn: lobbyDataObject.player1, }).then(async () => {
            console.log("game started");
            document.getElementById("gameArea").style.display = "block"
            console.log(lobbyDataObject.playerName1, lobbyDataObject.playerName2)
            document.getElementById("playerTurn").innerHTML = "Waiting for " + lobbyDataObject.playerName1 + " to take their turn";

        }).catch((error) => {
            console.log("error  " + error)
        });
    }
    if (gameStarted == true) {
        if (lobbyDataObject.Turn == userUID) {
            console.log("It is my turn");
            document.getElementById("playerTurn").innerHTML = "It is your turn";
            myTurn = true;
            console.log("myTurn " + myTurn)
        }
        if (lobbyDataObject.Guess == lobbyDataObject.Number && lobbyDataObject.player2 == lobbyDataObject.Turn) {
            fb_update("Games/guessTheNumber/lobbies/" + lobbyID, { Winner: lobbyDataObject.player2 });
            document.getElementById("playerVsPlayer").innerHTML = "YOU WIN";
            console.log("yep the 1rd if line is running" + lobbyDataObject.Turn);
            myTurn = false;

        } else if (lobbyDataObject.Guess == lobbyDataObject.Number && lobbyDataObject.player1 == lobbyDataObject.Turn) {
            document.getElementById("playerVsPlayer").innerHTML = "YOU LOSE";
            console.log("yep the 2rd if line is running" + lobbyDataObject.Turn);
            myTurn = false;

        } else if (lobbyDataObject.player2 == lobbyDataObject.Turn && lobbyDataObject.Guess !== lobbyDataObject.Number && lobbyDataObject.GuessedBy == lobbyDataObject.player2) {
            fb_update("Games/guessTheNumber/lobbies/" + lobbyID, { Turn: lobbyDataObject.player1 });
            console.log("yep the 3rd if line is running" + lobbyDataObject.Turn);
            document.getElementById("playerTurn").innerHTML = "Waiting for " + lobbyDataObject.playerName1 + " to take their turn";
            myTurn = false;
        }

    }
    if (lobbyDataObject.Guess > lobbyDataObject.Number) {
        console.log("works1");
        document.getElementById("feedback").innerHTML = "The number is lower than " + lobbyDataObject.Guess;
    } else if (lobbyDataObject.Guess < lobbyDataObject.Number) {
        console.log("works2");
        document.getElementById("feedback").innerHTML = "The number is higher than " + lobbyDataObject.Guess;
    }
    if (lobbyDataObject.Winner == lobbyDataObject.player2) {
        let wins = await fb_readRecord("Leaderboard/" + userUID, gtnWins)
        wins = wins + 1;
        await fb_update("Leaderboard/" + userUID, { "gtnWins": wins });
    }
}
async function guess() {
    if (myTurn == true) {
        let guess = document.getElementById("guessInput").value;
        guess = Number(guess);
        if (guess > 0 && guess < 100) {
            fb_update("Games/guessTheNumber/lobbies/" + lobbyID, { "Guess": guess, "GuessedBy": userUID })
        } else if (guess < 0) {
            document.getElementById("playerTurn").innerHTML = "guess a number more than 0 goofy💀"
        } else if (guess > 100) {
            document.getElementById("playerTurn").innerHTML = "guess a number less than 100 goofy💀"
        }

    } else {
        document.getElementById("playerTurn").innerHTML = "it is not your turn"
    }
}


