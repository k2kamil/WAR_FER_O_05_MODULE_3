const c = require("ansi-colors");

function printText() {
    console.log("----------------------");
    console.log("Witaj w pliku child.js");
    console.log(c.green("(ღ˘⌣˘ღ)"));
    console.log("----------------------");
}

module.exports = printText;