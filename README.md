# Debugging Duck MOBILE

This is my first React Native Cross Platform Mobile Application, a port of my first Electron Desktop app featuring a cute rubber duck that helps you debug your code. Explain your code to the duck and it will help you find the bugs!

> _Read the origin of the debugging duck_: [Rubber duck debugging - wiki](https://en.wikipedia.org/wiki/Rubber_duck_debugging)

### **Check out a demo of it built on the web**

- [Debugging Duck - Web](https://emanuelefavero.github.io/debugging-duck-vanilla-js/)

> Note: The web version is built with vanilla JS and has less features

## Features

![screenshot](./screenshot.png 'screenshot')

Ducky will always jump and greet you with different cute messages each time you open the app. It will also follow your finger with its eyes when you tap on the screen. It also opens and closes its eyes and breathes like a real duck

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

> Plans for the future:
>
> - Add more color themes (Night Owl is the only one right now)
> - Add a settings page
> - Add more cute messages
> - Add the possibility to change the duck mood
> - Add a way to change the duck's name
> - Add more cute animations
> - Add more languages
> - Add a way to change the duck's size
> - Add a way to change the duck's color
> - Add rubber duck sounds when you tap on it
> - Add a way to choose 3d or 2d duck
