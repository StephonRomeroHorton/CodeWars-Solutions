/* Question ~ Break camelCase: Complete the solution so that the function will break up camel casing, 
using a space between words.

Example:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Answer:
*/

function solution(string) {
  let newString = [];
  string = string.split('')

  for(i = 0; i < string.length; i++){
    if (string[i] == string[i].toUpperCase()){
      newString.push(" ");
      newString.push(string[i]);
    }else {
      newString.push(string[i]);
    }
  }
  newString = newString.join('')
  return newString;
};