/*eslint-env browser*/

var ursula = {
    name: "Ursula",
    grade: ""
};
var paul = {
    name: "Paul",
    grade: ""
};
var henry = {
    name: "Henry",
    grade: ""
};
var tabitha = {
    name: "Tabith",
    grade: ""
};
var lucy = {
    name: "Lucy",
    grade: ""
};
var total;
var average;
var i;

ursula.grade = window.prompt("What is Ursula's grade?");
paul.grade = window.prompt("What is Paul's grade?");
henry.grade = window.prompt("What is Henry's grade?");
tabitha.grade = window.prompt("What is Tabitha's grade?");
lucy.grade = window.prompt("What is Lucy's grade?");

var array = [ursula, paul, henry, tabitha, lucy];


for (i = 0; i < array.length; i = i + 1) {
    if (isNaN(array[i].grade || array[i].grade < 0)) {
        window.console.log(array[i].name + " was not given a proper grade");
    } else {
        if (array[i].grade >= 90) {
            window.console.log(array[i].name + "             A");
        } else if (array[i].grade >= 80) {
            window.console.log(array[i].name + "             B");
        } else if (array[i].grade >= 70) {
            window.console.log(array[i].name + "             C");
        } else if (array[i].grade >= 60) {
            window.console.log(array[i].name + "             D");
        } else if (array[i].grade < 60) {
            window.console.log(array[i].name + "             F");
        }
    }

    total += Number(array[i].grade);

}

average = Number(total / array.length);
window.console.log("The average is " + Number(average));
