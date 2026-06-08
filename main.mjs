/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_start, fb_initialise, fb_authenticate, fb_writeFarLands, fb_writeCoinGame,  fb_read_sortedFL, fb_read_sortedCG, createProfile, 
    infoRegistration, fb_writeAuth, createLobby, joinLobby, checkUID, guess
 }
    from './fb_io.mjs';

window.fb_start = fb_start;
window.fb_initialise = fb_initialise;
window.fb_writeFarLands = fb_writeFarLands;
window.fb_writeCoinGame = fb_writeCoinGame;
window.fb_read_sorted = fb_read_sortedFL;
window.fb_read_sorted = fb_read_sortedCG;
window.createProfile = createProfile;
window.infoRegistration = infoRegistration;
window.fb_writeAuth = fb_writeAuth;
window.createLobby = createLobby;
window.joinLobby=joinLobby;
//window.fb_initialise = fb_initialise;
window.fb_authenticate = fb_authenticate;
window.checkUID = checkUID;
window.guess = guess;


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