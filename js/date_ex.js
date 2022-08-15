//1 viết chương trình in ra năm sinh và số tuổi

function getAge(year = 0){
	if(typeof year !== "number") return;
	const now = new Date();
	const currentYear = now.getFullYear();
	return currentYear - year;
}

const yourAge = getAge("qư");
//console.log(`Tuổi là ${yourAge}`);

function countDown(minutes = 1) {

	let seconds = minutes * 60; 

	let counter = 0;

	const timer = setInterval(function () {
		counter = counter + 1;
		console.log(counter);
		if(counter === seconds){
			clearInterval(timer);
			console.log("END");
		}
	}, 1000);
}

//countDown(1);

function timeSince(date){
	const now = new Date();

	const yourDate = new Date(date);

	const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); //in số giây làm tròn xuống
	

}

//1 năm = 365 * 24 * 60 * 60 = 
//1 tháng = 31 * 60 * 60 * 60 = 

timeSince("Sat Jul 02 2022 09:26:43 GMT+0700 (Indochina Time)");

