/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
const createAuthUser = require('./Auth/createAuthUser');
const admin = require('firebase-admin');
const requestOneTimeCode = require('./requestOneTimeCode');
import * as serviceAccount from "./service_account.json";
const verifyOneTimePassword = require("./verifyOneTimePassword");

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zippers-b57eb-default-rtdb.firebaseio.com"
});




exports.createUser = onRequest(createAuthUser);

exports.requestOneTimeCode = onRequest(requestOneTimeCode);

exports.verifyOneTimePassword = onRequest(verifyOneTimePassword);
