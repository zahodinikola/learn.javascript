// var message = "I\'m JavaScript";

// alert(message);
//-------------------------------------------------------------------------
// var homePlanet = "Earth";
// message = typeof homePlanet;
// alert(message);

// var number = 45.23, logical = true, empty = null, undef, notANumber = " ";


// message = typeof number;
// alert(number + " " + message);

// message = typeof logical;
// alert(logical + " " + message);

// message = typeof empty;
// alert(empty + " " + message);

// message = typeof undef;
// alert(undef + " " + message);

// message = typeof notANumber;
// alert(notANumber + " " + message);

// var user = {
// 	name : "vasiliy",
// 	age  : 15
// };

// message = typeof user;
// alert(user + " " + message);
//-----------------------------------------------------------------------------
// var a = 1;
// var b = 2;

// var c = a + (a = b + 3);
// alert(c);
//-----------------------------------------------------------------------------
// var a = 5;
// var b = 15;

// //alert ("a = " + a.toString(2));
// //alert ("b = " + b.toString(2));

// var c = a & b;

// alert (a.toString(2) + " & " + b.toString(2) + " = " + c.toString(2));

// var d = a | b;

// alert (a.toString(2) + " | " + b.toString(2) + " = " + d.toString(2));

// var e = a ^ b;

// alert (a.toString(2) + " ^ " + b.toString(2) + " = " + e.toString(2));
//-----------------------------------------------------------------------------
// var data = 56;

// var key = 12345;

// var encriptedData = data ^ key;

// alert ("me transfered data: " + data + " with key: " + key + " that is: " + encriptedData);

// var recieved = encriptedData ^ key;

// alert ("one recieved: " + recieved);
//-----------------------------------------------------------------------------
// var a = 5;
// var b = ~a;

// alert("inversion by bit of " + a + " is " + b);
//-----------------------------------------------------------------------------
// var a = 5;
// var b = a << 5;
// alert(a.toString(2) + " << 1 is " + b.toString(2) + "; in decimail it equals " + a + " become " + b);
//-----------------------------------------------------------------------------
// var x = -5//parseInt("10011100", 2);
// var y = parseInt("01011110", 2);

// var z = x >> 2;

// alert("through operation of per bit shifting x = " + x + 
//       " becomes " + z + "\n in binary it looks like " + 
//       x.toString(2) + " becomes " + z.toString(2));
//-----------------------------------------------------------------------------
// var a = -5//parseInt("10011100", 2);
// var b;

// b = a >>> 2;

// alert ("through operation of per bit shifting with zero-fillin a = " + a + 
//       " becomes " + b + "\n in binary it looks like " + 
// 	  a.toString(2) + " shifted right by " + 2 + " symbols is " + b.toString(2));
//-----------------------------------------------------------------------------
// var inputValue = document.getElementById("inputNumber").value;
// function putInDiv(){
// 	var inputValue = +document.getElementById("inputNumber").value;
// //	alert(typeof inputValue);
// 	var intermediate = inputValue.toString(2);
// 	var inverted = ~intermediate;
// 	output.innerHTML = intermediate + " is " + inverted;
// }
//-----------------------------------------------------------------------------
// function isInteger(){
// 	var inputValue = +document.getElementById("inputNumber").value;
// 	if (inputValue == (inputValue ^ 0)) {
// 		output.innerHTML = "true";
// 	}else output.innerHTML = "false"
// }
//-----------------------------------------------------------------------------
// var sum = 0;
// var input;
// while (true){
//     input = +prompt("input number","");
//     if (!input) break;
//     sum += input;
// }
// alert (sum);
//-----------------------------------------------------------------------------
// for (var i = 2; i <= 10; i++) {
//   if (!(i % 2) ) {
//     alert( i );
//   }
// }
//-----------------------------------------------------------------------------
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;

// while (i<3){
//     alert("number " + i + " !");
//     i++;
// }

//-----------------------------------------------------------------------------

// while (true){
//     input = +prompt ("input number greater then 100", "");
// //    alert(input);
//     if (input > 100 || input === 0) break;
// }alert (input);



//-----------------------------------------------------------------------------
// var isNotSimple = 1;
// for (var i = 2; i < 10 ; i++){
//   for (var j = 2; j < i; j++){
//     if (i%j == 0){
//       isNotSimple = 1;
//       alert("1 " + i + " ; " + j + " ; " + isSimple);
//       break;
//     }
//   }

//   if(!isNotSimple){
//       alert(i);
//       isNotSimple = 0;
//       alert("2 " + i + " ; " + j + " ; " + isSimple);
//   }
// }
// var isNotSimple = 1;
//-----------------------------------------------------------------------------
//simple numbers
// var result = "";
// outer:  for (var i = 2; i <= 20; i++){
//             for (var j = 2; j < i; j++){
//                 if (!(i%j)) continue outer;
//             }
//             result = result + ((!!result)?",":"") + i;
//         }
// alert (result);
//------------------------------------------------------------------------------
// var total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

function range(firstElement, lastElement) {
    var array = [];
    delta = (arguments[2])?arguments[2]:1;

    switch (delta >= 0){
        case true:
            for (var i = firstElement; i <= lastElement; i += delta){
                array.push(i);
            }
            break;
        case false:
            for (var i = firstElement; i >= lastElement; i += delta){
                array.push(i);
            }
            break;
    }
    return array;
}

alert("summa of " + range(10, 1, -1) + " is " + sum(range(10, 1, -1)));

function sum(array) {
    var summa = 0;
    for (var i = 0; i < array.length; i++) {
        summa += array[i];
    }
    return summa;
}

function reverseArray(array) {
    var resultArray = [];

    for ( var i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    }

    return resultArray;

}

alert(reverseArray(['a', 'b', 'c', 'd', 'e']));


function reverseArrayInPlace(array) {
    var firstIndex = 0;
    var lastIndex = array.length - 1;
    var pocket;

    while (firstIndex <= lastIndex) {
        pocket = array[firstIndex];
        array[firstIndex] = array[lastIndex];
        array[lastIndex] = pocket;
        firstIndex++;
        lastIndex--;
    }
    return array;
}

var arr = [1, 2, 3, 4, 5, 6 ,'a', 'b', 'c', 'd', 'e'];
alert(reverseArrayInPlace(arr));
