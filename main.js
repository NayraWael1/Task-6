//Task 1
function sayHello(userName){
    console.log(`Hello ${userName}`);
}
sayHello("Nayra");


//Task 2
function numbers(num1,num2){
    if(num1 < num2){
        console.log(num2);
    }else{
        console.log(num1);
    }
}
numbers(30,20);


//Task 3
 function reverseString(strigg){
    return strigg.split("").reverse().join("");
}
 let result = reverseString("Hello");
console.log(result)


//Task 4
function primeFactors(n) {
    let factors = [];
    let divisor = 2;
    while (n > 1) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}
console.log(primeFactors(34)); 




//Task 5
function validateEmail(email){
    const n  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return n.test(email);
}
let email = "gammal@gmail.com";
console.log(validateEmail(email));


//Task 6
function factorialNumber(number){
    let sum = 1;
    for(let i = number ; i>0 ;i--){
        sum *=i;
    }
    return sum;
}
console.log(factorialNumber(4));


//Task 7
function area(length,width){
    area = length * width;
    return area;
}
console.log(`The Area of Rectanglr ${area(2,3)}`);
