/* Question ~ Sum of Positive:You get an array of numbers, return the sum of all of the positives ones.
Note: if there is nothing to sum, the sum is default to 0.


Example:
[1,-4,7,12] => 1 + 7 + 12 = 20

Answer:
*/

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (Math.sign(arr[i]) == 1){
      sum += arr[i];
     };
    };
  return sum
  };