// console.log("hello");
function add(n1, n2) {
    return n1 + n2;
}

const WORKING_HOURS_WEEK = 46;

let counter = 0;

function inc(amount = 1) {
    counter += amount;
    return counter;
}

function dec(amount = 1) {
    counter += amount;
    return counter;
}

const moduleName = 'Module 1'


// export default moduleName;
export default (num) => num * num;

export {WORKING_HOURS_WEEK, 
    WORKING_HOURS_WEEK as WHW,
    add as sum,
    inc,
    dec,
    counter  // hatırlatın
}

console.log("module 1 is loading");
console.log(WORKING_HOURS_WEEK);

//* Moduller dışında değişkenlere aatama yapılamaz.
//* const gibi davranır. 
