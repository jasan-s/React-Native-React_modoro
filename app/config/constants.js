import firebase from 'firebase'

  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyDbLO2kACLa2ULq6w5J-plKPzGR4s36o4A',
  authDomain: 'reactmodoro-5f0d8.firebaseapp.com',
  databaseURL: 'https://reactmodoro-5f0d8.firebaseio.com',
  storageBucket: 'reactmodoro-5f0d8.appspot.com',
  messagingSenderId: '211434045508'
}
firebase.initializeApp(config)

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider
}