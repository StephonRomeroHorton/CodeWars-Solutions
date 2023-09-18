/* Question ~ Abbreviate a Two Word Name:Write a function to convert a name into initials.
 This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

Example:
Sam Harris => S.H
patrick feeney => P.F

Answer
*/

function abbrevName(name){
  name = name.split(" ");
  let firstInt =  name[0][0].toUpperCase();
  let lastInt =  name[1][0].toUpperCase();
  return firstInt + "." + lastInt;

}
