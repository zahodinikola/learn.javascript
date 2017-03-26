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

// var arrayToSort = [1, 45, 3, 56, 11, 48, 23, 90, 33];
// var pivot, currentElement, wall;
// //var length = arrayToSort.length;
// //function qSort (arrayToSort){
// //we have array, lets find a pivot and place it in a right position
//   var length = arrayToSort.length;
// // alert (length + " " + typeof length);
//   var pivotPointer = length-1;
//   var lowerPointer = 0;
//   var higherPointer = pivotPointer - 1;
//   var box;
// // alert ("pivotPointer: " + pivotPointer + "\n" + "lowerPointer: " + lowerPointer + "\n" + "higherPointer: " + higherPointer);
//   while (lowerPointer < higherPointer) {
//     // alert("i`m here");
//     pivot = arrayToSort[pivotPointer];
//     // alert (arrayToSort[lowerPointer] + " " + pivot + " " + arrayToSort[higherPointer]);
//     if (arrayToSort[lowerPointer] < pivot && arrayToSort[higherPointer] > pivot){
//       lowerPointer++;
//       higherPointer -= 1;
//     }else if (arrayToSort[lowerPointer] < pivot && arrayToSort[higherPointer] < pivot){
//       lowerPointer++;
//     }else if (arrayToSort[lowerPointer] > pivot && arrayToSort[higherPointer] > pivot){
//       higherPointer -= 1;
//     }else if (arrayToSort[lowerPointer] > pivot && arrayToSort[higherPointer] < pivot){
//       box = arrayToSort [lowerPointer];
//       arrayToSort [lowerPointer] = arrayToSort [higherPointer];
//       arrayToSort [higherPointer] = box;
//       lowerPointer++;
//       higherPointer -= 1;
//     }
//   }
//   alert(arrayToSort);
//   alert ("pivotPointer: " + pivotPointer + "\n" + "lowerPointer: " + lowerPointer + "\n" + "higherPointer: " + higherPointer);
// //}