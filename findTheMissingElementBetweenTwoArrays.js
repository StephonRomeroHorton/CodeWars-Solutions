/* Question ~ Find The Missing Element Between Two Arrays: Given two integer arrays where the second array
 is a shuffled duplicate of the first array with one element missing, find the missing element.
Please note, there may be duplicates in the arrays, so checking if a numerical value
 exists in one and not the other is not a valid solution.


Examples:
find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.

Answer:
*/

function findMissing(arr1, arr2) {
  const sum1 = arr1.reduce((acc, val) => acc + val, 0);
  const sum2 = arr2.reduce((acc, val) => acc + val, 0);
  return sum1 - sum2;
}