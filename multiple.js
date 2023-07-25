function multiples(){
    let input = prompt('enter a num: ');
    if(input%3==0 && input%5==0){
        return console.log('Multiple of 3 and 5');
    }
    else{
        return console.log('Not a Multiple of 3 and 5');
    }
    
}

multiples();
