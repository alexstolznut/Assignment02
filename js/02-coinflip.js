/*eslint-env browser*/

var coinFlip = Math.random(100);
coinFlip = coinFlip * 20;
coinFlip = Math.floor(coinFlip);
var choice = window.prompt("Select Heads or Tails");

//if (coinFlip > 10) {
//    window.document.write("Heads");
//} else {
//    window.document.write("Tails");
//}
window.console.log(coinFlip);
if (choice.toUpperCase() === "HEADS" && coinFlip >= 10) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if(choice.toUpperCase() === "TAILS" && coinFlip >= 10) {
    window.alert("The flip was heads but you chose tails...you lose!");
  
} else if(choice.toUpperCase() === "HEADS" && coinFlip < 10 ) {
    window.alert("The flip was tails but you chose heads...you lose!");
   
} else if(choice.toUpperCase() === "TAILS" && coinFlip < 10){
    window.alert("The flip was tails and you chose tails...you win!");
  
}