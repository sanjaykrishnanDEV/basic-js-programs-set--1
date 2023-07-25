const num = 48;
const isPerfectSquare = num => {
   let ind = 1;
   while(ind * ind <= num){
      if(ind * ind !== num){
         ind++;
         continue;
      };
      console.log('perfect square');
   };
  return  (console.log('Not a perfect square'));
   
};
isPerfectSquare(num);
