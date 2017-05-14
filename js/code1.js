'use strict'

// as far script is scanning during initialisation
// for function declarations and variables declarations
// so they are available before script execution
alert(a); // added to global object (window), but 'undefined'
alert(output); // outputs text of function declaration
// alert(b); // as there is no such variable in global object at the moment
            // so script stops with error and when i hit button
            // in .html, function gives a = undefined

function output() {
    document.getElementById("view").innerHTML = window.a;
}
var a = 5;
alert("hi, i'm js");
// b = 4;

function func() {}

func.test = 5;
alert(func.test);

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    }

    counter.currentCount = 1;

    alert(counter);
    return counter;
}

var counter = makeCounter();
alert("function properties " + counter());
alert("properties2 " + counter());
