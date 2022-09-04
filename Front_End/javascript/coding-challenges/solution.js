//1. Bölüm Loops

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.


//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.


//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.


//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.


//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.



//2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.


//! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);


// let arr = ["bir", "iki", "üç", "dört", "beş", "altı"]


// const zarAtma =  (n) => {
//     for (let i = 1; i<n+1; i++){
//     const zar1 = Math.floor(Math.random()*6+1);
//     const zar2 = Math.floor(Math.random()*6+1);
//     console.log(`zar1 : "${}`)
//     }
// }



let arr = ["one","two","three","four","five","six"]

const dices = (n) => {
    for (let i = 1; i < n+1; i++){
        const dice1 = Math.floor(Math.random()*6)+1;
        const dice2 = Math.floor(Math.random()*6)+1;
        console.log(`Dice 1 : "${dice1}" / Dice 2 : "${dice2}" -> ${arr[Math.min(dice1,dice2)-1]}-${arr[Math.max(dice1,dice2)-1]}`)
    }

}
dices(5,2)


const student = (info) => {
    console.log(`
    Student Nr: ${info.split(",")[0].split(" ")[0]}
    First Name: ${info.split(",")[0].split(" ").at(-2)}
    Last Name: ${info.split(",")[0].split(" ").at(-1)}
    Location: ${info.split(",")[1]}
    Program: ${info.split(",")[2]}
    `);
}

let a = ['C1234 - John Doe, London, Full-Stack', 
'C2345 - Jane Doe, London, Data-Science', 
'C2346 - Mary Ann, Paris, AWS-Devops', 
'C2347 - Adam Smith, Texas, AWS-Devops', 
'C2444 - Michael Great, Arizona, Full-Stack', 
'C2555 - William Cash, Manchester, Data-Science', 
'C2455 - Patrick Jane, Madrid, Full-Stack'] 

for (i of a){
    student(i)
}

/ ******* ROLL THE DICES***********

const roll = (number) => {
  for (let i = 1; i <= number; i++) {
    let rol1 = Math.ceil(Math.random() * 6);
    let rol2 = Math.ceil(Math.random() * 6);
    const arr = ["one", "two", "three", "four", "five", "six"];
    if (rol1 > rol2) {
      console.log(`${i}. times => ${arr[rol2 - 1]} - ${arr[rol1 - 1]}`);
    } else {
      console.log(`${i}. times => ${arr[rol1 - 1]} - ${arr[rol2 - 1]}`);
    }
  }
};
roll(10);

// ******* Student Registration **************

const arr = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

const student = (a) => {
  a.map((str) => {
    let result = str.split(" ");
    console.log(`Student Nr: ${result[0]}\n
First Name: ${result[2]}\n
Last Name: ${result[3].slice(0, -1)}\n
Location: ${result[4].replace(/,$/, "")}\n
Program: ${result[5]}\n
==========================`);
  });
};
student(arr);




JS-CC-005 : Email Validator (ROOM-23)
const email = prompt("please enter your email");
function isValid(frm) {
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Invalid");
    return false;
  } else {
    alert("Valid");
    return true;
  }
}
isValid(email);



const emailValidation = email => {
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email.match(emailformat) ? alert("Valid email address!"): alert("You have entered an invalid email address!");
  }
  emailValidation('can.ocalir@gmail.com')



  let chars ='abcdefghijklmnopqrstuvwxyz0123456789_+.@'

function ValidateEmailAddress(str) {
	let atSymbol = 0
	let dotCheck = (str.length -1) - str.lastIndexOf(".");
	if ((dotCheck == 0 || dotCheck == 1)) return `invalid . position`
	
	for (const i of str.toLowerCase()) {
		if(i === '@') atSymbol++
		if (chars.includes(i)) {
		}else{
			return `invalid character detected in email address '${i}'`
		}
	}
	
    console.log(str.indexOf('@'), str.lastIndexOf("."))
	
	if((atSymbol > 1 || str.indexOf('@') == 0) || !atSymbol || str.indexOf('@') > str.lastIndexOf(".")) return `invalid '@' count or position`
	return  `${str} is a valid email address`

}


console.log(ValidateEmailAddress('mark.m@clarusway.com'))