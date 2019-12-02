const print = require("./child.js");
print();

const validator = require("validator");
const isOk = validator.isEmail("foo@op.pl");

const c = require("ansi-colors");
console.log(c.yellow(isOk));