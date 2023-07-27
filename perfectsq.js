let num = Number(prompt("enter a number: "));
function isPerfectSquare(num) {
  if (num < 0) {
    return false;
  }
  let sq = Math.sqrt(num);
//   console.log(sq);
  if(num == sq*sq){
      console.log(`${num} is  a perfect square.`);
  }
  else{
      console.log(`${num} is not a perfect square.`);
  }
 
}
isPerfectSquare(num);
