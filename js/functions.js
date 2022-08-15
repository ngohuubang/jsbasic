function sum(a = 0, b = 0){
	a = Number(a);
	b = Number(b);
	return a + b;
}

function add(a = 0, b= 0){
	return a + b;
}

//parameter :tham số
//argument: đối số

function mes(){
	return "thông báo"
}

const sum2 = add;

function avg(a, b, fn){
	const total = fn(a, b);
	return total/2;
}

let result = avg(8, 6, sum2)

console.log(result);

console.log(sum(4) + " "+ mes());
console.log(add(5,sum(3,9)) + " " + mes());


//anonymus function(function expression) : hàm không có tên , không bị hoisting (hositing là lỗi gọi ra trc khi đc khởi tạo)

const logName = function (){
	console.log("your name");
}

logName();

//IIFE -> immediately invoked function excution : hàm thực hiện ngay tức thì
(function(){
	console.log("This is IIFE function");
})();

//scope 
//global scope, function  scope (biến toàn cục và biến cục bộ)
let myName = "ngohuubang" //global scope

//block scope ( nằm trong block ({}) không thể truy xuất ra ngoài)
 if(2 > 1){
 	let message4  = "Hello";
 	var message5 = "Hello Bang";
 }
 //var không là block scope
 //alert(message5);

//lexical scope
//closure : function bên trong có quyền truy xuất scope của function bên ngoài

function sayHello2(){
	let message6 = "Hi";
	function sayHi(){
		console.log(message6);
	}

	return sayHi();
}

let hello = sayHello2();
console.log(hello);

function sayHello3(message){
	return function hi(name){
		console.log(`${message} ${name}`);
	}


}

let hello2 = sayHello3("hello");
hello2("world");

function anotherFunction(){
	let otherMessage = "hello";
	function sayHHi(){
		console.log(otherMessage);
	}

	return sayHHi;
}

let callFunc = anotherFunction();

// vẫn có thể truy xuất được khi function đã return đối với closure 

callFunc();

function compare(a = 0,b= 0){
	if(typeof a !== "number" || typeof b !== "number"){
		console.log("Nhập số");
		return 0;
	}

	return Math.max(a, b);
}

console.log(compare(100, "1000"));

//2.in ra chữ cái in hoa cho trong chữ 
function capitalize(word = ""){
	if(word.length === 0) return null;
	//convert to lower case first
	let newWord = word.toLowerCase().charAt(0).toUpperCase();

	//charAt(index)
	//slice(startIndex, endIndex - 1)
	//hello -> slice(1): -> hello
	let otherWord = word.toLowerCase().slice(1);
	return `${newWord}${otherWord}`;
}

console.log(capitalize("BANG"));

//------------------------------------------
function useCallback(a, b, callback){
	let max = compare(a,b);
	callback(max);

}

function printMax(number){
	console.log("Max number is "+ number);
}

console.log(useCallback(500, 1000, printMax));

// arrow function : là anonimus function 
// ECMAScript

const square = function (x) {
	return x * x;
};

const square1 = (x) => {
	return x*x;
}

const square1 = () => {
	return 1000;
}

//cách viết rút gọn
const square2 = (x) => x * x;

/*
const square = () => {
	handle code and return 
}


*/