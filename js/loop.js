// for (let i = 0; i < array.length; i++) {
//     if(number[i] === 8){
//          break; 
//     }else{
//     console.log(`The index is ${i}`);
//     console.log(`The value is ${array[i]}`);  
//     } 
// }

//Math.sign(123) -> 1 số dương trả về 1
//Math.sign(-123) -> -1 số âm trả về -1

function reverseNumber(number){
    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value);
}
reverseNumber(-1234);


function fizzBuzz(number) {
    for (let i = 1; i<= number ; i++){
        if( (i%2 === 0) && (i%3 === 0)){
            console.log(`FizzBuzz Number:${i}`);
        }
        else if( i%3 === 0){
            console.log(`Buzz Number:${i}`);
        }
        else if( i%2 === 0){
            console.log(`Fizz Number:${i}`);
        }
    }
}

fizzBuzz(10);

function countVowels(string){
    let count = 0;
    const characters = "ueoai";
    for (let c of string){
        if(characters.includes(c))
        {
            count += 1;
        }
    }

    return count;
}

console.log(countVowels("abcqweqgqwe"));

function unique(arr){
    let result = [];

    if(!Array.isArray(arr))
        return result;

    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
        
    }

    return result;
}

console.log(unique([1,1,1,2,3,5,6,5,5,7,8,9]));
console.log(unique([1,1,1,2,3,5,6,5,5,7,8,9]));

function splitArray(array, number){
    let result = [];
    //splice(s,e)

    let i = 0;
    while (i < array.length){
        result.push(array.slice(i, number + i));
        i = i + number;
    }
    console.log(result);
    return result;
}

splitArray([1,2,3,4,5,6],2);