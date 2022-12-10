import * as firebase from "firebase-admin";

/**
 * Defines a Firebase Service Account certificate.
 * This is used during initialization as a credential.
 */
const cert: firebase.ServiceAccount = {
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp({
      credential: firebase.credential.cert(cert),
      databaseURL: "",
    });
  } catch (error: any) {
    console.log("Firebase admin failed to initialize.", error.stack);
  }
}

export default firebase.firestore();
