const { src, dest, series, watch } = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
  sass: ['./scss/**/*.scss']
};

const sass = (done) => {
  return src('./scss/ionic.app.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./www/css/'))
    .on('end', done);
};

const watching = () => watch(paths.sass, series(sass));

exports.default = sass;
exports.sass = sass;
exports.watch = watching;
