// Number(value) : chuyển đổi giá trị sang số

console.log(Number("4.5")) //4.5
console.log(Number("abww")) //NaN
console.log(Number(null)) //0
console.log(Number(undefined)) //NaN
console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(NaN)) //NaN

console.log(String(4.5)) //"4.5"
console.log(String(null)) //"null"
console.log(String(undefined)) //"undefined"
console.log(String(NaN)) //"NaN"
console.log(String(false)) //"false"


// Boolean(value) -> return true or flase
console.log(`Boolean of 0: ${Boolean(0)}`) //flase
console.log(`Boolean of "": ${Boolean("")}`) //false
console.log(`Boolean of null: ${Boolean(null)}`) //false
console.log(`Boolean of fales: ${Boolean(false)}`) //false
console.log(`Boolean of undefined: ${Boolean(undefined)}`) //false

console.log(`Boolean of text: ${Boolean("text")}`) //true

//type coercion
console.log(10 + 10) // kiểu sô: 20
console.log(10 + "10") // kiểu chuỗi 1010

console.log(false - true)
console.log(true - true)
console.log(1 - true)
console.log("123" < "a")

//js cố gắng chuyển đổi giá trị sang string đối với dấy cộng

//Toán tử logic cơ bản && || !=

//alert, confrim, prompt

//const var prompt("message","defaul") : lưu giá trị vào biến
//confrim("message") : trả về true or false 

const yourAge = 15;
let message2 = yourAge >= 18 ? "Người lớn" : "Trẻ em";
console.log(message2);

let message3 = yourAge >= 18 ? "Người lớn" : yourAge <= 10 ? "Trẻ em" : "Vị thành niên";
console.log(message3);
