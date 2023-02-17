# Demo of Ionic v1 with AngularJS 1.5

This project demonstrates an updated [Ionic v1](https://ionicframework.com/docs/v1/) project that uses the
latest [XLTS for AngularJS 1.5.x](https://xlts.dev/angularjs) release (`1.5.17`) rather than the `1.5.3` End-Of-Life version
that ships with the Ionic v1 SDK. It also makes use of
[XLTS for AngularJS Material 1.1.x](https://material.angularjs.xlts.dev/1.1.30/) (`1.1.30`).

## Package Management

The project uses [NPM](https://www.npmjs.com/) instead of the
[deprecated Bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower/). We use the
[tools/populate-lib.sh](tools/populate-lib.sh) script to copy library files from `node_modules/` to
`www/lib/`.

## Angular LTS support

If you want to use the LTS packages, you can run the `npm run switch-to-lts-packages` script instead of `npm install`.

## Styling

The project uses to the latest `sass` package and removes the use of the deprecated `node-sass` package. This
includes [migrating](https://sass-lang.com/documentation/breaking-changes/slash-div) the Ionic Sass files to
remove use of the slash (`/`) for division.

## NodeJS LTS

The project supports the NodeJS LTS (14.x) through the use of the `npm-force-resolutions` package to solve
errors related to `primordials`.

## Cordova

The project uses Cordova, as that is most common with Ionic v1 projects, even though many recommend Capacitor
now.

## Development

### Start in browser

`npm start`

### Start in Android

`npm run start:android`

### Start on iOS

`npm run start:ios`

### Start e2e tests on Desktop Chrome

`npm run e2e`

## Questions?

Check out our [GitHub Discussions](https://github.com/xlts-dev/angularjs-ionic-v1/discussions) section to
ask questions or find answers.
