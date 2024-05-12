/*Question ~ Isograms: An isogram is a word that has no repeating letters, consecutive or
 non-consecutive. Implement a function that determines whether a string that contains only letters
  is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

Answer:
*/

function isIsogram(str){
  const checkWord = (item, index)=> {
    str.forEach((i, x) => {
     if (i === item && index !== x){
      result = false
     }
    })
  };
  let result = true;
  str = str.toLowerCase();
  str = str.split("");
  str.forEach(checkWord);
  return result
}