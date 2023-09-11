/* Question ~ Opposite Number: Very simple, given an integer or a floating-point number,
 find its opposite.

Examples:

1: -1
14: -14
-34: 34

Answer:
*/

function opposite(number) {
  return number < 0 ? Math.abs(number) : Math.abs(number) * -1; 
}