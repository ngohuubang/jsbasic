const now = new Date();
console.log(now);

//timestamp tính từ 1970
//epochtime  

//console.log(now.getTime()); //print timestamp
console.log(new Date(0)); // 1/1/1970

//new Date() in ra ngày giờ hiện tại
//new Date(timeStamp) dựa vào timestamp in ra kêt quả
//new Date(date String) -> 
//new Date(year, month, day, hour, minutes, seconds, miliseconds)
//month tính từ số 0

//Các hàm get trong date
//getFullYear() :lấy ra năm
const day = new Date(2000, 10, 25);
//in ra năm 
console.log(day.getFullYear()); // 2000
//in ra tháng
//hàm getMonth chạy từ 0 - 11
console.log(day.getMonth());
//in ra ngày của tháng
console.log(day.getDate()); //từ 1 - 31
//in ra thứ
console.log(day.getDay()); //từ 0 - 6 : chủ nhật - thứ 7
//in ra giờ
console.log(day.getHours());
//in ra phút
console.log(day.getMinutes());
//in ra timestamp
console.log(day.getTime());

//các hàm set trong date
console.log(`My date: ${day}`);
day.setFullYear(2002);
console.log(`My date after update: ${day}`);

console.log(now.toDateString());

console.log(now.toTimeString());

console.log(now.toLocaleDateString());

console.log(now.toLocaleDateString("vi-VI"));

console.log(now.toISOString());

const myTime = new Date("Sat Jul 02 2022 09:26:43 GMT+0700 (Indochina Time)");

const myYear = myTime.getFullYear(); 
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();

const preFixMonth = myMonth < 10 ? "0" : "";

console.log(`${myDate}/${preFixMonth}${myMonth}/${myYear}`);

//setTimeout vs setInterval

setTimeout(function() {
	alert("call me after 3 second");
}, 3000);

//1s lặp 1 lần

const timer = setInterval(function() {
	console.log("call me")
}, 1000);

clearInterval(timer);