/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import {
    fb_start, fb_initialise, fb_authenticate, fb_writeFarLands, createProfile,
    infoRegistration, fb_writeAuth, createLobby, joinLobby, guess, showJoin, showCreate, fb_read_sorted, leaderboardRead, showNecessary
}
    from './fb_io.mjs';
console.log("main.mjs has loaded");
window.fb_start = fb_start;
window.fb_initialise = fb_initialise;
window.fb_writeFarLands = fb_writeFarLands;
window.createProfile = createProfile;
window.infoRegistration = infoRegistration;
window.fb_writeAuth = fb_writeAuth;
window.createLobby = createLobby;
window.joinLobby = joinLobby;
window.fb_authenticate = fb_authenticate;
// window.checkUID = checkUID;
window.guess = guess;
window.showJoin = showJoin;
window.showCreate = showCreate;
window.fb_read_sorted = fb_read_sorted;
window.leaderboardRead = leaderboardRead;
window.showNecessary = showNecessary;

/**************************************************************/
// check if user has registerd. And also doesnt run on the registration page
/**************************************************************/
if(window.location.pathname.includes("registration")) {
    console.log("we are here on the registration page les goo")
} else {
    window.addEventListener("DOMContentLoaded", fb_start)
}

/**************************************************************/
//   END OF CODE
/**************************************************************/