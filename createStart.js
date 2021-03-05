/*
    Write a function that takes an input between 0 and 5 inclusively and outputs an array 
    of 5 elements that will be used for generating 5 stars in a UI.  

    node readNum.js 

*/

function createStars(inpNum) {

   var inpFloor = Math.floor(inpNum);
   var ansArr=[];

   if (0 < inpNum  && inpNum  <= 5 ) {
     for (var i=0; i<inpNum-1; i++) {
       ansArr.push(100);
     };  

     for (var i=inpNum; i<inpNum+1; i++) {    
       if (i == inpFloor) {
         ansArr.push(100);
       } else {  
         ansArr.push(100*(i-inpFloor).toFixed(4));
       }  
     };

     for (var i=inpNum+1; i<5; i++) {    
       ansArr.push(0);
     };
     
     return ansArr;

   } else {
            if (0 == inpNum) {
              ansArr = [0,0,0,0,0];
              return ansArr;
             } else  {
               return "Error - input int is out of range";
             }
   }
}

// Test runs

var inpNum = 0.00;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
// createStarts(3.34) = [0,0,0,0,0]

var inpNum = 3.00;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
// createStarts(3.00) = [100,100,100,0,0]

var inpNum = 5.00;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
// createStarts(5.00) = [100,100,100,100,100]

var inpNum = 3.34;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
// createStarts(3.34) = [100,100,100,34,0]

var inpNum = 1.3;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
//createStarts(1.3) = [100,30,0,0,0]

var inpNum = 5.3;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );
// createStarts(5.3) = [Error - input int is out of range]

var inpNum = 3.5;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );

var inpNum = 1.6667;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );

var inpNum = 4.1;
myArr = createStars(inpNum);
console.log("createStars("+inpNum+") = [" + myArr +"]" );

