import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAtjTW4XvDv5knTdNLcF_ghDTSrNx7pUBE",
    authDomain: "foodapp-5ade9.firebaseapp.com",
    databaseURL: "https://foodapp-5ade9.firebaseio.com",
    projectId: "foodapp-5ade9",
    storageBucket: "foodapp-5ade9.appspot.com",
    messagingSenderId: "54690230677"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase