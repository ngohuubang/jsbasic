//Math.floor(value) : làm tròn xuống
//Math.ceil(value): làm tròn lên
//Math.round():làm tròn 
//toFixed(2): làm tròn 2 số thập phân
//Math.random() : lấy số ngẫu nhiên 0 > 1
//Math.max , Math.min : trả ra số lớn nhất và nhỏ nhất 
console.log(`Max: ${Math.max(1,5,6)}`);
console.log(`Min: ${Math.min(1,5,6)}`);
//Math.pow(v, n): lấy số mũ
//isNaN -> is Not a number
//console.log(isNaN("anbcww")); -> true
//console.log(isNaN("16496")); -> fasle

// Undefined -> Khai báo nhưng chưa gán giá trị

let a;
console.log(a); // undefined

a = "string1";

console.log(a); // String1

//khi dùng const thì buộc phải gắn giá trị 

// Null -> nothing

let b = null;
console.log(b);

//Boolean -> true or false
//falsy values vs truthy values

//falsy values: "",0 , false, undefined, null