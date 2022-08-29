
//! QUESTION-1  : Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year) 

//todo : SOLUTION    :::

// function isleapYear(year) {
//     if (year % 4 === 0){
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return ("leap year.");
//             }else {
//                 return ("Not leap year");
//             }
//         } else {
//             return ("Leap year.");
//         }
//     } else {
//         return ("Not leap year.")
//     }
// }
//-------------------------------------------

// Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

// pseudocode:

// (0-99) only divisible by 4 --> leap year
// (100-400) divided by 4 and  if not divisible by 100 --> leap year
// if divisible by 100 and divisible by 400 --> leap year


// first way:
// const isLeapYear = (year) => {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`${year} is a leap year.`);
//         } else {
//             console.log(`${year} is not a leap year.`);
//         }
//     } else {
//         if (year % 4 === 0) {
//             console.log(`${year} is a leap year.`);
//         } else {
//             console.log(`${year} is not a leap year.`);
//         }
//     }
// }

// isLeapYear(64);
// isLeapYear(1900);
// isLeapYear(2000);
// isLeapYear(1912);


// function leapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// --------------------------------------------------

// const isLeapYear = function (year) {
//     if (year % 4 === 0 && year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const year = Number(prompt("Lütfen yıl giriniz.")) ;
// console.log(`${year} is ${isLeapYear(year)}`);

//-------------------------------------------------------



// const isLeapYear = function (year) {
//     return (year % 4 === 0 && year % 400 === 0) ? "LEAP YEAR" : "NOT LEAP YEAR";
// }

// const year = Number(prompt("Lütfen yıl giriniz.")) ;
// console.log(`${year} is ${isLeapYear(year)}`);

//---------------------------------------------------------

// const isLeapYear = (year) => year % 4 === 0 && year % 400 === 0 ? "LEAP YEAR" : "NOT LEAP YEAR";

// const year = Number(prompt("Lütfen yıl giriniz.")) ;
// console.log(`${year} is ${isLeapYear(year)}`);




//! Verilen bir sayı ile 20 arasındaki farkı gösteren bir JavaScript programı yazınız. sayı 20'den büyükse mutlak farkın iki katı göster

// let sayi = Number(prompt("Enter a number"));
// let result;
// if (sayi < 20 ) {
//     result = 20 - sayi;
    
// } else {
//      result = (sayi -20) * 2;
     
// }

// console.log(result);

//-------------------------------------------------

const absoluteResult = (num) => {
    if (num < 20) {
        return 20 - num;
    } else {
        return Math.abs((20-num) * 2);
    }

    console.log(absoluteResult(15));
    console.log(absoluteResult(45));
}

//-------------------------------------------------
//! 3 QUESTION ===

// const areaOfTriangle = (a,b,c) => {
//     let s = (a + b + c) / 2;
//     return (s * (s-a) * (s-b) * (s-c)) ** 0.5;
// }
// console.log(areaOfTriangle(3, 4, 5));


//---------------------------------------------------------

//! question = 5.

// const largerNumofTwo = (num1, num2) => {
//     if (num1 > num2) {
//         return `${num1} is greater than ${num2}`;
//     } else if ( num1 == num2) {
//         return `${num1} is equal ${num2}`;
//     } else {
//         return `${num1} is smaller than ${num2}`;
//     }
// }

//---------------------------------------------------

// const range50To100 = (number3) => {
//     if (number3 > 50 && number3 < 100) {
//         return `${number3} is range 50 to 100`;
//     } else {
//         return `${number3} is not range 50 to 100`; 
//     }
// }

// console.log(range50To100(55));;

//------------------------------------------------------

// const calc = (a,b, operand) => {
//     let result;

//     switch (operand) {
//         case "+":
//             result = a + b;
//             break;
//         case "-":
//             result = a - b;
//             break;
//         case "*":
//             result = a * b;
//             break;
//         case "/":
//             result = a / b;
//             break;
    
//         default:
//             return "İnvalid process";
//     }
//     return result;
// };
// console.log(calc(5,6, "*"));

//------------------------------------------------------

// const oddorEven = (x) => {
//     // return x % 2 ===0 ? `"EVEN` : `"ODD`;
//     return x % 2 ? `ODD` : "EVEN"
// }

// console.log(oddorEven(3));

//------------------------------------------------------
//todo hangi sayi 100'e dha yakın sonucunu versin diyoruz


let yakinSayi = (num1, num2) => {
    let difrent1 = Math.abs(100-num1);
    let difrent2 = Math.abs(100-num2);

    if (difrent1 > difrent2) {
        return `${num1} 100'e daha uzaktır.`
        
    } else if (difrent1===difrent2) {
        return `iki sayı eşittir.`
    } else {
        return `${num2} 100'e daha uzaktır.`
    }

}

console.log(yakinSayi(95, 25));