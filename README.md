# Expo Workshop

This workshop will guide you through the process of creating a simple todo app using React Native and Expo. The app will be able to fetch todos from a simulated backend API, add new todos, toggle the state of todos and delete todos. The app will also have a settings page where the user can change the settings of the app and a profile page where the user can set a profile picture. We will use Expo Router and React Navigation to handle the navigation between the different screens. We will focus on the parts of the app that are specific to mobile development, and not on the parts that are common to web development.

## Getting Started

### Pre-requisites

- Node.js LTS release or greater

- A device to run the Expo app on (Android or iOS) or an emulator
  - Install the Expo app from the [App Store](https://itunes.apple.com/app/apple-store/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) if you want to run the app on your device

### Install Dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

Run the app on your device scanning the QR code in the Expo app. Alternatively, run the app on an emulator by pressing `a` for Android or `i` for iOS.

If you have connection issues, try running the app with `npx expo start --tunnel` instead. This creates a proxy server that will allow you to run the app on your device even if you are not on the same network as your computer. You need to install ngrok to use this feature. You can install ngrok by running `npm install -g ngrok`.

### Common Issues

Random warnings and hot reloading not working: Try reloading the app by pressing `r` in the terminal.

## Tasks

The tasks for this workshop are located [here](docs/tasks.md).
