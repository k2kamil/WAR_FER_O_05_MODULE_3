# Zadanie

Naszym celem będzie zainstalowanie gulpa i odpowiednich paczek, stworzenie konfiguracji oraz skompilowanie pliku **scss/main.scss** do pliku **css/main.css**.

## Zadanie 1
Stwórzmy plik początkowy package.json. Skorzystajmu tutaj z kreatora odpalanego komendą

```
npm init -y
```

## Zadanie 2
Zainstalujmy odpowiednie paczki:

```
npm i gulp node-sass gulp-sass gulp-sourcemaps gulp-a
```

## Zadanie 3

Stwórzmy plik gulpfile.js z naszą dotychczasową konfiguracją.

```
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const c = require('ansi-colors');

//własna funkcja pokazująca błędy
function ourErrors(err) {
  console.log(c.red("----------------"));
  //by zobaczyć z jakich właściwości możemy skorzystać możemy w konsoli wypisać err.toString()
  console.log(c.red(err.messageFormatted));
  console.log(c.red("----------------"));
  this.emit("end");
}

function compileSass(cb) {
    gulp.src('./scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle : "expanded"}).on('error', ourErrors)) //własne błędy
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
    cb();
}

function watcher(cb) {
  gulp.watch('./scss/**/*.scss', gulp.series(compileSass));
}

exports.default = gulp.parallel(compileSass, watcher);
```

## Zadanie 4
Skompilujmy scss na css i sprawdźmy widok naszej strony odpalając w terminalu nasze główne zadanie komendą:
```
gulp
```