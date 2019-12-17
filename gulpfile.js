const gulp = require('gulp');

function nazwaZadania(cb) {
  console.log('Jestem przykładowym zadaniem');  
  cb();
});

exports.nazwaZadania = nazwaZadania;