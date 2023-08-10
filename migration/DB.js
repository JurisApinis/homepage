const ENV = require('dotenv').config();
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');

class DB {
    config = {
        apiKey: ENV.parsed.VITE_FB_API_KEY,
        authDomain: ENV.parsed.VITE_FB_AUTH_DOMAIN,
        projectId: ENV.parsed.VITE_FB_PROJECT_ID,
        storageBucket: ENV.parsed.VITE_FB_STORAGE_BUCKET,
        messagingSenderId: ENV.parsed.VITE_FB_MSG_SENDER_ID,
        appId: ENV.parsed.VITE_FB_APP_ID,
        measurementId: ENV.parsed.VITE_FB_MEASUREMENT_UD
    };

    firebaseApp = null;

    constructor() {
        this.firebaseApp = firebase.initializeApp(this.config);
        this.fireStore = firestore.getFirestore(this.firebaseApp);
    }

    async setData(collection, doc = undefined, data) {
        let args = [this.fireStore, collection];

        if(doc) args.push(doc);

        await firestore.setDoc(
            firestore.doc(...args),
            data,
        );
    }

}

module.exports = new DB();
