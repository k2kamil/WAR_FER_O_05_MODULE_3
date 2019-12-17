
const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const colors = require('ansi-colors');
const notifier = require('node-notifier');
const browserSync = require('browser-sync').create();

const showError = function(err){
    //console.log(err.toString());

    notifier.notify({
        title: 'Error in sass',
        message: err.messageFormated
    })

    console.log(colors.red('======================'));
    console.log(colors.red(err.messageFormatted));
    console.log(colors.red('======================'));

}

const server = function(cb){
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false,
        open: true
    });

    cb();
}

const css = function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "extended"
        })).on("error", showError)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/css')) // folder destynacji gdzie ma stworzyć plik css
        .pipe(browserSync.stream({match:'**/*.css'}));
}

const watch = function () {
    gulp.watch('scss/**/*.scss', gulp.series(css));
    gulp.watch('*.html').on("change", browserSync.reload);
}


exports.default = gulp.series(css, server, watch);
exports.css = css;
