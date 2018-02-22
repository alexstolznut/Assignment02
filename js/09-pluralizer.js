/*eslint-env browser*/

var noun = window.prompt("Please enter a noun");
var number = window.prompt("Please enter a number of the noun");

if (noun === "geese" || noun === "sheep") {
    window.document.write(number + " " + noun);
} else if (number > 1) {
    window.document.write(number + " " + noun + "s");
} else if (number < 1) {
    window.document.write(number + " " + noun + "s");
} else {
    window.document.write(number + " " + noun);
}
