/* Question ~ Is N Divisible by (...)?:
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7

Answer:
*/


function isDivisible(...args){
  let result = 0;

  function iterate(i){ 
    if (args[0] % i === 0){
    result += 1;
    }
  };

  args.forEach(iterate);
 
  if (result == args.length){
   return true
  } else{
   return false
  };
};

/*
"In brightest day,
in blackest night, 
no evil shall escape my sight,
let those who worship evil's might,
beware my power, 
Green Lantern's light"
*/