/* Question ~ Odd or Even?: Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Answer:
*/


function oddOrEven(array) {
  if(array.length > 0){
    let nums = array.reduce((total,int) =>{
      return total + int;
    });
    return Math.abs(nums) % 2 === 0 ? 'even': 'odd';
  } else{
    return "even"
  }
};