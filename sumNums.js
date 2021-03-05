/*
    Write a function that returns the sum of a list of integers [10,4,15]          

    node sumNums.js

*/

function addNumbers(intList) {
   var sum=0;
   for (var i=0; i<intList.length; i++) {
     sum += intList[i];
   }
   return sum;
}

var mySum1 = addNumbers([1,2,3]);
console.log("SUM1 = ", mySum1);

var mySum2 = addNumbers([10,4,15] );
console.log("SUM2 = ", mySum2);

var mySum3 = addNumbers([] );
console.log("SUM3 = ", mySum3);
