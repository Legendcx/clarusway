console.log("Mehmet Bey'in  Soru çözümleri");


const arrToString = (arr) => {
    // return arr.toString()
    return arr.join(", ");
}


//! 2. SORU 

const insertDash = (num) => {
    console.log(num)
    let result=""
    for (let i = 0; i < num.length; i++){
        if(num[i] % 2 ==0 && num[i+1] % 2 ==0) {
            result +=num[i] + "-"
        }else {
            result +=num[i]
        }

    }
    return result
}


console.log(insertDash("025468"));



//*****************SORU 3 ************************ */

// const sortArr = (arr) => {
//     return arr.sort((a, b) => a - b)
// }

// console.log(sortArr([3,8,7,6,-5,4,8,9,12]));


//***********  SORU - 4 ******************** */

// arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// console.log(arr1.sort());

const mostTekrar = (arr) => {
    let most;
    let repetion = 0;
    let count= 0
    arr = arr.sort()
    console.log(arr)
    for (let i =0; i<arr.length; i++) {
        count = 0
        for(let k=i+1; k<arr.length; k++){
            if (arr[i]==arr[k]){
                count++
            }
        }
        if(count>repetion){
            repetion=count
            most=arr[i]
        }
    }
    return `${most} en çok tekrar sayıdır. ${repetion} kere tekrar etmiştir.`
}

console.log(mostTekrar([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//-----------------solution 2 ----------------------------


const numbers1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

let countedNumbers = numbers1.reduce((acc, number) => {
    if (number in acc) {
      acc[number]++
    } else {
      acc[number] = 1
    }
    return acc
  }, {});
  
  console.log(countedNumbers);


  //**************** SORU  5  ******************** */

  const swapCase = (str) => {
    let arr=str.split(" ")
    console.log(arr)

    let result= ""
    for(let item of arr) {
        
        for(let k = 0; k<item.length; k++){
            if(item[k]==item[k].toLowerCase()){
                let result=""
                result+=item[k].toUpperCase()
            }else{
                result+=item[k].toLowerCase()
            }
        }
        result += " "
    }
    return result.trim()
  }


console.log(swapCase(`The Quick Brown Fox`));