function calculateVolume(){
    let length = Number(prompt('enter length: '));
    let width = Number(prompt('enter width: '));
    let height = Number(prompt('enter height: '));
    let volume = Number(length*width*height);
    console.log(`the volume is ${volume}`);
}
calculateVolume();
