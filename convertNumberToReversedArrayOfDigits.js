/* Question ~ Convert Number To Reversed Array Of Digits:
Given a random non-negative number, you have to return the digits
 of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

Answer:
*/

function digitize(n) {
  return  Array.from(String(n), x => Number(x)).reverse();
 };