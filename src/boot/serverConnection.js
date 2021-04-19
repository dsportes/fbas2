// import something here
import firebaseService from '../services/firebase'
import axios from 'axios'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, ... } */) => {
  // something to do
  const config = await axios.get('./config.json')
  console.log('Boot ... ' + process.env.MODE)
  const app = firebaseService.fBInit(config.data)

  // Validation that our service structure is working
  // with a Firebase application auth instance. Does not validate a
  // valid API key.
  console.log('Firebase App Instantiation:', app)
  console.log('Firebase Auth Module:', firebaseService.auth())
}
