/*eslint-env browser*/
var i;

for(i=1; i <= 100; i = i + 1){
var moduloThree = i % 3;
var moduleFive = i % 5;

    if(moduloThree === 0 && moduleFive ===0){
         window.document.write("Marco!Polo!");
    }else if( moduleFive === 0){
        window.document.write("Polo");
    } else if (moduloThree === 0){
        window.document.write("Marco!");
    }
    window.console.log(i);
}
