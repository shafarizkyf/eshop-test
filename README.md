# Mini Project E-Shop

This projects utilize `https://dummyjson.com/docs/products` API.

### Demo (E2E Testing)

[![Demo Video](https://www.youtube.com/watch?v=xIZs3EyCqYM)](https://www.youtube.com/watch?v=xIZs3EyCqYM)

### Environment

- Node v20.15.9
- java 17.0.2 2022-01-18 LTS
- XCode 16C5032a

### Installation

Install packages

```
npm install
```

Run (ios)

```
npm run ios
```

Run (android)

```
npm run android
```

(mac specific) Allow accessing gradlew command

```
chmod 755 android/gradlew
```

### End-to-End Test

```
maestro test maestro
```

### Build Android Release

- cd android
- ./gradlew bundleRelease (.aab; located at: /android/app/build/outputs/bundle/release)
- ./gradlew assembleRelease (.apk; located at: /android/app/build/outputs/apk/release)

### Build iOS

- open Xcode
- open \*.xcworkspace from ios directory of this project
- product > archieve
