/* Question ~ Grasshopper-Summation: Write a program that finds the summation of every number
 from 1 to num. The number will always be a positive integer greater than 0.

 Example returns:
 (input -> output)
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

Answer:
*/

var summation = function (num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum = i + sum;
  }
  return sum; 
}
//for lor loop ending at num
//for each loop do i plus sum
// return sum