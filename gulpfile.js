const { src, dest, series, watch } = require('gulp');
const plumber = require('gulp-plumber');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
  sass: ['./scss/**/*.scss']
};

const sass = (done) => {
  return src('./scss/ionic.app.scss')
    .pipe(plumber({
      handleError: () => this.emit('end')
    }))
    .pipe(dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./www/css/'))
    .on('end', done);
};

const watching = () => watch(paths.sass, series(sass));

exports.default = series(sass);
exports.sass = series(sass);
exports.watch = series(watching);
