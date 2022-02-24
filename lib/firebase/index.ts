import * as firebase from "firebase-admin";

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
    console.log("Firebase admin initialization error", error.stack);
  }
}

export default firebase.firestore();
