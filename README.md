## Title: Boutique des Parfums
This project was bootstrapped with [Expo](https://expo.dev/).

### `npm start`

Runs Metro Bundler in the interactive watch mode.

Metro waiting on exp://192.168.0.18:19000

or Scan the QR code with Expo Go (Android) or the Camera app (iOS)

### `npm run ios`

Runs the app in the iOS simulator.

### `npm run android`

Runs the app in the Android simulator.

### Screenshot of the project! 
[![host-exp-exponent-Screenshot-2023-08-19-11-02-36.png](https://i.postimg.cc/J0cq6Hdb/host-exp-exponent-Screenshot-2023-08-19-11-02-36.png)](https://postimg.cc/n9rBMrxz) 
[![Boutique-des-parfums.jpg](https://i.postimg.cc/pT5z75ym/Boutique-des-parfums.jpg)](https://postimg.cc/S2qnYs64) 





### Description
Online portal for a perfume store. It includes all the steps until generating the purchase order and also a list of registered users with their profiles. Use of the camera to add avatars, whose data is persistent through the use of firebase.
It also includes a section where customers can leave their messages or comments, persistent data through SQLite

### Meta
### https://github.com/FerCasais
### https://www.linkedin.com/in/pablo-casais-lopez-front-end-developer-react-js/

### Demo
APK
### application-707b86c3-b923-41bf-b87c-6020c082df46.apk

### Dependencys
 Navigation tools:

    "@react-navigation/bottom-tabs": "^6.5.8",
    "@react-navigation/native": "^6.1.7",
    "@react-navigation/native-stack": "^6.9.13",

   Managing states:  

    "@reduxjs/toolkit": "^1.9.5",
    "react-redux": "^8.1.1",

Expo utils including the use of phone galleries

    "expo": "^49.0.8",
    "expo-camera": "~13.4.2",
    "expo-font": "~11.4.0",
    "expo-image-picker": "~14.3.2",
    "expo-screen-orientation": "~6.0.5",
    "expo-status-bar": "~1.6.0",

SQLite:

    "expo-sqlite": "~11.3.2",

The non SQL data base. 
We use the real time database of google in this project and its login authentifications.

    "firebase": "^10.1.0",

More React dependencies
    
    "react": "18.2.0",
    "react-native": "0.72.4",
    "react-native-paper": "^5.9.1",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
  

  Easy tools to assure correct inputs in forms
   
    "formik": "^2.4.3",
    "yup": "^1.2.0"
  
    
