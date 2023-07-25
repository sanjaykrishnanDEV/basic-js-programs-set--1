function perimeter(){
    let length = Number(prompt('enter length: '));
    let width = Number(prompt('enter width: '));
    let perimeter = 2*(length+width);
    return perimeter;
}

console.log(perimeter());
