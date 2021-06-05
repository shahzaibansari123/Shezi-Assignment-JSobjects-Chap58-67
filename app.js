// Chapter 58-67 "DOM"

// Question 01 
// Part 01

// var q1Part1 = document.getElementById('main-content');

// Question 01 
// Part 02

// console.log(q1Part1.children);

// Question 01 
// Part 03

// var q1Part3 = document.getElementsByClassName('render');
// document.write("<br>"+"Below written data is from assignment, where it was asked to display all childs on browser" + "<br>")
// for (i=0 ; i<q1Part3.length ; i++) {
//     document.write(q1Part3[i].innerHTML + "<br>")
// }

// Question 01 
// Part 04

// var q1Part4 = document.getElementById('first-name');
// q1Part4.value = "Shahzaib"

// Question 01 
// Part 05

// var q1Part5One = document.getElementById('last-name');
// q1Part5One.value = "Ansari"
// var q1Part5Two = document.getElementById('email');
// q1Part5Two.value = "ansarishahzaib567@gmail.com"

// Question 02 
// Part 01

// var q2Part1 = document.getElementById('form-content');
// console.log(q2Part1.nodeType); 

// Question 02 
// Part 02

// var q2Part2 = document.getElementById('lastName');
// console.log(q2Part2.nodeType);
// console.log(q2Part2.childNodes);

// Question 02 
// Part 03

// q2Part2.childNodes[0].nodeValue = "Last Name : Ansari";

// Question 02 
// Part 04

// console.log(q1Part1.lastElementChild);
// console.log(q1Part1.firstElementChild);

// Question 02 
// Part 05

// console.log(q2Part2.nextElementSibling);
// console.log(q2Part2.previousElementSibling);

// Question 02 
// Part 06

// console.log(q1Part5Two.parentNode)
// console.log(q1Part5Two.parentNode.nodeType)