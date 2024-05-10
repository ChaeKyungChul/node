//받아올것 exam2
const { odd, even } = require('./exam2'); //변수받음 

const checkOddOrEven = (num) => {
    if( num % 2){
        return odd;
    }else if( num % 2 == 0){
    return even;
    }
    return "숫자가 아닙니다.";
}

console.log(checkOddOrEven(10));
console.log(checkOddOrEven(13));
console.log(checkOddOrEven('hello'));