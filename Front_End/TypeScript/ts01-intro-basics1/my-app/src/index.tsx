export {};
console.log("Hello TypeScript!");

let a:string;
a = "5";
console.log(a)


//! type ANY demek ben ne verirsem kabul et demektir. 
let something: any = "hello world";
something=23;
something=false;

let arr: any[] = ["John", 22, true];
arr.push("Burhan");
console.log(arr);

//todo burada tipini number dediğimiz için hata veriyor
let numbers: number[] = [];
// numbers.push("3");

let bet : unknown =5;

let bet2 : number = bet as number;
console.log(bet, bet2);

let firstName = "Legendcx";
let lastName = "James";


//!return olmadığı için buna void dendi. değer döndürmedi.
function getFullName():void {
  // console.log(firstName + " " + lastName);
 return; //firstName + " " + lastName;
}

let isveren: [number, string][];
isveren = [[1,"Ali"], [2, "Veli"]]
console.log(isveren)

function greet(message:string, person:string): string {
return message + " " + person + "!";
}

// const gr1 = greet("Good night", "Legendcx");
// console.log(gr1 );

// class Employee {
//   empCode:number;
//   empName:string;

//   constructor (code:number, name:string)
//   {
//     this.empCode = code;
//     this.empName = name;
//   }
// }
// let emp = new Employee(100, "John");
// console.log(emp);

class Person {
  name: string;
  constructor(name:string) {
    this.name = name
  }
}

class Employee extends Person {
  empCode:number;
  constructor(code:number, name:string) {
    super(name);
    this.empCode = code
  }
  displayName():void {
    console.log(this.name, this.empCode);
  }
}