/* Question ~ Double Char: Given a string, you have to return
a string in which each character (case-sensitive) is repeated once.

Examples: (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "


Answer:
*/
const doubleChar = string => {
  let newString = "";
  for(let i = 0; i <= string.length - 1; i++){
    if (i == i){
      newString += string[i];
    }
      newString += string[i];
    };
  return newString;
};