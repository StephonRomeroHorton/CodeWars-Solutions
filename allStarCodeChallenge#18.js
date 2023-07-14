/*  Question ~ All Star Code Challenge #18 :
Create a function that accepts a string and a single character,
and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.

Example Returns :
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/

//Answer :

function strCount(str, letter){ 
  let result = 0;
  let arr = str.split('');
  
  arr.forEach( element => {
    if(element === letter){
      result += 1;
    }
  });
  return result;
};