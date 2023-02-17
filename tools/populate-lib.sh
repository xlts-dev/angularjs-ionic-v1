#!/bin/bash

mkdir -p www/lib
cp -R node_modules/angular www/lib;
cp -R node_modules/angular-animate www/lib;
cp -R node_modules/angular-aria www/lib;
cp -R node_modules/angular-material www/lib;
cp -R node_modules/angular-messages www/lib;
cp -R node_modules/angular-sanitize www/lib;
cp -R node_modules/angular-ui-router/api www/lib/angular-ui-router;
cp -R node_modules/angular-ui-router/release www/lib/angular-ui-router;
mkdir -p www/lib/ionic;
cp -R node_modules/ionic-sdk/scss www/lib/ionic;
cp -R node_modules/ionic-sdk/release/css www/lib/ionic;
cp -R node_modules/ionic-sdk/release/fonts www/lib/ionic;
mkdir -p www/lib/ionic/js;
cp node_modules/ionic-sdk/release/js/ionic.min.js www/lib/ionic/js;
cp node_modules/ionic-sdk/release/js/ionic.js www/lib/ionic/js;
cp node_modules/ionic-sdk/release/js/ionic-angular.min.js www/lib/ionic/js;
cp node_modules/ionic-sdk/release/js/ionic-angular.js www/lib/ionic/js;
