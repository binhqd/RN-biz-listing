###
## How to run on development##
1. Open AVD Manager
2. Run an AVD
3. Go to project folder then run `react-native start`
4. Run `react-native run-android`

## Create a release build
First, take a deep look on http://facebook.github.io/react-native/docs/signed-apk-android.html#content

Go to project folder and run
```sh
cd android && ./gradlew assembleRelease
```
