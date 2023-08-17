/* Question ~ Beginner Series #2 Clock:
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

Input Constraints:
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

Example:
h = 0
m = 1
s = 1

result = 61000

Answer:
*/

function past(h, m, s){
  return s * 1000 + m * 60000 + h * 3600000;
}