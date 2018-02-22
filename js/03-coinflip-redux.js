/*eslint-env browser*/
var coinFlip;
var i;

for (i = 1; i <= 10; i = i + 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
    
}