/*  Question ~ Vowel Count:  Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Example:

owl => 1
apple => 2
aeropostale => 6

Answer:
*/


function getCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
           sum += 1;
         }
       }
   return sum
}
