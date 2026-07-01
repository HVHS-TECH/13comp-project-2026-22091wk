/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import {
    fb_start, fb_initialise, fb_authenticate, fb_writeFarLands, createProfile,
    infoRegistration, fb_writeAuth, createLobby, joinLobby, checkUID, guess, showJoin, showCreate, fb_read_sorted, leaderboardRead, showNecessary
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
window.checkUID = checkUID;
window.guess = guess;
window.showJoin = showJoin;
window.showCreate = showCreate;
window.fb_read_sorted = fb_read_sorted;
window.leaderboardRead = leaderboardRead;
window.showNecessary = showNecessary;

/*window.fb_onAuthStateChanged = fb_onAuthStateChanged;
window.fb_signOut = fb_signOut;
window.fb_writeRecord = fb_writeRecord;
window.fb_readRecord = fb_readRecord;
window.fb_readAll = fb_readAll;
window.fb_destroy = fb_destroy;
window.fb_updateRecord = fb_updateRecord;
*/
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/