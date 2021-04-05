// import something here
import firebaseService from '../services/firebase'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, ... } */) => {
  // something to do
  console.log('Boot ... ' + process.env.environments.ENV_TYPE)
  const config = process.env.environments.FIREBASE_CONFIG
  const app = firebaseService.fBInit(config)

  // Validation that our service structure is working
  // with a Firebase application auth instance. Does not validate a
  // valid API key.
  console.log('Firebase App Instantiation:', app)
  console.log('Firebase Auth Module:', firebaseService.auth())
}
