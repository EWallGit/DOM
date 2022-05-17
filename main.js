
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    // add your code here
    
    let number = a + b + b;
    number = number + 90; //add 90
    number = number/10;//divide it by ten
    if (number % 5 === 0){//check if number is divisible by five
        number = number - 8; //subtract 8
    }
    else {
        number = number + 9; //add 9
    }
    number = number * number; //square number
    let G = number / 3; //divide previous by 3
    
    return roundUp (G);
    
    // remember to call roundUp() with your result before returning
    // return roundUp(g);
}