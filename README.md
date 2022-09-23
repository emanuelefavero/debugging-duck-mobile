# Debugging Duck MOBILE

This is my first React Native Cross Platform Mobile Application, a port of my first Electron Desktop app featuring a cute rubber duck that helps you debug your code. Explain your code to the duck and it will help you find the bugs!

_If you want to read the origin of the debugging duck_: [Rubber duck debugging - wiki](https://en.wikipedia.org/wiki/Rubber_duck_debugging)

## RUN APP

Please check the required steps to run the app in your local machine on the following link, since the steps are different for each OS:

- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
- [React Native Running On Device](https://reactnative.dev/docs/running-on-device)

## If you already have the environment setup, start the app with:

```bash
npx react-native run-ios
```

OR

```bash
npx react-native run-android
```

## If you want to specify a simulator in ios:

```bash
npx react-native run-ios --simulator="iPhone 14 Pro"
```

## **Build Android APK**

```bash
    npm install
    npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    cd android
    ./gradlew assembleDebug
```

NOTE: If you want to use your a custom icon go to this website: [easy app icon](https://easyappicon.com/) and follow instructions to generate the icons and replace the ones in the android/app/src/main/res folder.
BEWARE:

1. The icon must be named ic_launcher.png.
2. You also need to update AndroidManifest.xml (the one inside the main folder) as it is explained in the website.
3. Don't put `<adaptive-icon...` code in the AndroidManifest.xml file, just the `<application...` code.
