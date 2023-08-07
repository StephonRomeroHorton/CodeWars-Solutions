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