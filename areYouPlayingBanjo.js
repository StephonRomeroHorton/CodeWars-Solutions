/* Question ~ Are You Playing Banjo?:Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Answer:
*/

function areYouPlayingBanjo(name) {
  switch(name[0]){
      case "R":
      case "r":
      return `${name} plays banjo`
      break;
      default:
       return `${name} does not play banjo` 
  };
};