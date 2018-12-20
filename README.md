# Setups Performed

* Install nodejs
* Install ionic
  ```bash
  npm install -g ionic
  ionic start chess sidemenu --type=angular
  ```
* Install capcitor
  ```bash
  npm run build
  npm install --save @capacitor/cli @capacitor/core
  npm uninstall --save cordova-plugin-splashscreen
  npx cap init chess io.github.venjoy.chess
  npx cap add android
  npx cap open android
  npx cap copy
  ```
