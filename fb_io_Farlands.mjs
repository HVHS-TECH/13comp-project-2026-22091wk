var fb_gamedb;
var userUID;
var username;
var userDisplayName;
var userProfilePicture
var leaderboard1; 
var newScoreValid;
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme

/**************************************************************/
// Importing all external constants & functions here
/**************************************************************/
//import { initializeApp, getDatabase, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, ref, set, get, update }
//    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, query, orderByChild, limitToFirst }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


/**************************************************************/
// Exporting functions to be used in main.mjs
/**************************************************************/
export {
    fb_initialise, fb_authenticate, fb_start, fb_writeFarLands, fb_writeCoinGame, fb_read_sortedFL, fb_read_sortedCG, fb_updateInformationRegistrationFL, fb_updateInformationRegistrationCG,
    fb_updateInformationRegistrationAgeFL, fb_writeAuth
};
function fb_start() {
    fb_initialise();
    fb_authenticate();
}
function fb_initialise() {
    console.log('%c fb_initialise(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const firebaseConfig = {
        apiKey: "AIzaSyAQ4FYhhhVQvTWxBJstBPqUEM7k1z3HNCs",
        authDomain: "comp-2025-william-kan.firebaseapp.com",
        databaseURL: "https://comp-2025-william-kan-default-rtdb.firebaseio.com",
        projectId: "comp-2025-william-kan",
        storageBucket: "comp-2025-william-kan.firebasestorage.app",
        messagingSenderId: "928584832942",
        appId: "1:928584832942:web:caa21627c817d307485a3f",
        measurementId: "G-L6S6H3WPXE"
    };
    // Initialize Firebase
    const FB_GAMEAPP = initializeApp(firebaseConfig);
    fb_gamedb = getDatabase(FB_GAMEAPP);
    console.info(fb_gamedb);
}
function fb_authenticate() {

    
    sessionStorage.setItem("UID", userUID);
    console.log("working function")
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    // Create a popup window to sign in
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        //document.getElementById("p_fbAuthenticate").innerHTML = "Authenticated";
        console.log(result.user.photoURL);
        console.log(result.user.email);
        console.log(result.user.displayName);
        console.log( result.user.uid);

        
        userUID = result.user.uid;
        userDisplayName = result.user.displayName;
        userProfilePicture = result.user.photoURL;
        console.log(userUID)



        //  const userEmail = result.user.email;

        sessionStorage.setItem("UID", userUID);
        // sessionStorage.setItem("userDisplayName", userDisplayName);
        // sessionStorage.setItem("userProfilePicture", userProfilePicture);


        console.log(AUTH);
        fb_writeAuth();




    }).catch((error) => {
        console.log("error authenticating: " + error);
        // document.getElementById("p_fbAuthenticate").innerHTML = "Failled Authenticating";
    });
    
}
function fb_writeAuth() {
    userUID = sessionStorage.getItem("UID");
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

    update(dbReference, { UID:userUID, userDisplayName:userDisplayName, userProfilePicture:userProfilePicture}).then(() => {
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
    var score;
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

    update(dbReference, { Score: Number(score)}).then(() => {
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
    var score;
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

    update(dbReference, { Score: Number(score)}).then(() => {
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
    var sortKey = "Score";
    const dbReference = query(ref(fb_gamedb, "Games/FarLands/Users"), orderByChild(sortKey), limitToFirst(3));
    get(dbReference).then((Snapshot) => {
        Snapshot.forEach(function (userScoreSnapshot) {
            var fb_data = userScoreSnapshot.val();
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
    var sortKey = "Score";
    const dbReference = query(ref(fb_gamedb, "Games/CoinGame/Users"), orderByChild(sortKey), limitToFirst(3));
    get(dbReference).then((Snapshot) => {
        Snapshot.forEach(function (userScoreSnapshot) {
            var fb_data = userScoreSnapshot.val();
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
function fb_updateInformationRegistrationFL() {
    const age = sessionStorage.getItem("age")
    const name = sessionStorage.getItem("name")
    const dbReference = ref(fb_gamedb, "Games/FarLands/Users/" + userUID);

    update(dbReference, { Name: name}).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });
       


}
function fb_updateInformationRegistrationAgeFL() {
    const dbReference = ref(fb_gamedb, "details/users/" + userUID);
    let age = sessionStorage.getItem("age")


    update(dbReference, { Age: Number(age) }).then(() => {
        console.log("update successful2");


    }).catch((error) => {
        console.log("error  " + error)
    });
}

function fb_updateInformationRegistrationCG() {
    const age = sessionStorage.getItem("age")
    const name = sessionStorage.getItem("name")
    const dbReference = ref(fb_gamedb, "Games/CoinGame/Users/" + userUID);

    update(dbReference, { Name: name}).then(() => {
        console.log("update successful");


    }).catch((error) => {
        console.log("error  " + error)
    });
       


}