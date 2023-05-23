"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import * as logger from "firebase-functions/logger";
const createAuthUser = require('./Auth/createAuthUser');
const admin = require('firebase-admin');
const requestOneTimeCode = require('./requestOneTimeCode');
const serviceAccount = require("./service_account.json");
const https_1 = require("firebase-functions/v2/https");
const verifyOneTimePassword = require("./verifyOneTimePassword");
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `${process.env.DATABASE_URL}`
});
exports.createUser = (0, https_1.onRequest)(createAuthUser);
exports.requestOneTimeCode = (0, https_1.onRequest)(requestOneTimeCode);
exports.verifyOneTimePassword = (0, https_1.onRequest)(verifyOneTimePassword);
//# sourceMappingURL=index.js.map