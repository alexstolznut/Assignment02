/*eslint-env browser*/
var a = window.prompt("Enter a number");
var b = window.prompt("Enter another number");
a = parseInt(a);
b = parseInt(b);
if (a === b) {
    window.document.write("The two numbers are equal. Please enter two integers of different value");
} else if (a > b) { 
    window.document.write(a);
} else{
    window.document.write(b);
}