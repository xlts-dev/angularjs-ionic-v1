#!/bin/bash

cp -R node_modules/angular/ www/lib/angular/;
cp -R node_modules/angular-animate/ www/lib/angular-animate/;
cp -R node_modules/angular-sanitize/ www/lib/angular-sanitize/;
cp -R node_modules/angular-ui-router/api/ www/lib/angular-ui-router/api/;
cp -R node_modules/angular-ui-router/release/ www/lib/angular-ui-router/release/;
mkdir -p www/lib/ionic;
cp -R node_modules/ionic-sdk/scss/ www/lib/ionic/scss/;
cp -R node_modules/ionic-sdk/release/css/ www/lib/ionic/css/;
cp -R node_modules/ionic-sdk/release/fonts/ www/lib/ionic/fonts/;
mkdir -p www/lib/ionic/js/;
cp node_modules/ionic-sdk/release/js/ionic.min.js www/lib/ionic/js/;
cp node_modules/ionic-sdk/release/js/ionic.js www/lib/ionic/js/;
cp node_modules/ionic-sdk/release/js/ionic-angular.min.js www/lib/ionic/js/;
cp node_modules/ionic-sdk/release/js/ionic-angular.js www/lib/ionic/js/;
