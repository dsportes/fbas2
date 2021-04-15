# Quasar App (fbas2)

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

--

nvm install 14.16.0  
nvm use 14.16.0  

Après install de yarn  
yarn global bin  
=> donne le path d'installation des produits  
c:\users\Domi\AppData\Local\Yarn\bin à mettre dans le path  

yarn global install @quasar/cli

quasar create fbas2 --branch next

et ça marche ! (dev et build OK)

________________________________

quasar ext add @quasar/qenv  
=> donner le nom 'environments' pour Common Root Object (et non pas none)  
=> mettre dans le .gitignore (ou non)  

Dans .quasar.env.json inclure la config firebase :  
    "FIREBASE_CONFIG": {  
      "apiKey": "AIzaSyAYPIEceVAWulDX28HNWFhsswl7SZCEHEQ",  
      "authDomain": "asocial-8b7a2.firebaseapp.com",  
      "projectId": "asocial-8b7a2",  
      "storageBucket": "asocial-8b7a2.appspot.com",  
      "messagingSenderId": "248723365369",  
      "appId": "1:248723365369:web:197899cf0426e52841b128",  
      "measurementId": "G-LYT225PPZ3"  
    }  

yarn add firebase

yarn add --dev cross-env

Dans package.json "scripts" : {   
ajouter :  
"dev": "cross-env QENV=development quasar dev"  

quasar new boot serverConnection

Dans quasar.config.json :  
boot: [  
  'serverConnection'  
],  

Editer src/boot/serverConnection.js

Créer src/service/firebase index.js et base.js

yarn install

yarn dev

Et ça marche !

Cloné P le 15 avril 2021
