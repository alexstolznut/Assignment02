/*eslint-env browser*/
var number = window.prompt("Please enter a number");
Number(number);
while (number >= 0) {
    window.document.write(number + "<br>");
    number -= 1;
}