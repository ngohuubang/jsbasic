// cách tạo mảng
//array literal

const studen = [];

//array constructor

//nếu truy xuất k có trả về underfine

//phương thức hay dùng của mảng
//length -> trả về độ dài của mảng
//reverse -> đảo ngược giá trị của mảng
//join -> nối các phần tử trong mảng thành string
//includes -> kiểm tra mảng đó có chứ phần tử đó hay không -> trả về true false
//indexOf -> trả về vị trí tìm thấy đầu tiên trong mảng đó
//lastIndexOf -> trả về vị trí tìm thấy cuối cùng trong mảng
//push -> thêm phần tử vào cuối mảng
//unshift -> thêm phần tử vào đầu mảng
//pop -> xóa phần tử cuối cùng trong mảng
//shift -> xóa phần tử đầu tiên trong mảng


/////////////////////////////////////////

// slice() : tạo ra mảng mới sao chép mảng ban đầu

const animals = ["tiger", "lion", "elephant"];

const animals2 = animals.slice();

console.log(animals2);

//slice(start) -> bắt đầu sao chép từ vị trí index
const animals3 = animals.slice(1);

console.log(animals3);

//slice(start, end) -> bắt đầu từ vị trí nào đến vị trí nào end là vị trí kết thúc

const animals4 = animals.slice(0,2);
console.log(animals4);

//slice(-1) -> lấy phần tử cuối cùng 

//splice() -> xóa phần tử trong mảng hoặc thay thế phần tử trong mảng

const pet = ["dog", "cat", "mouse", "bird"]

//splice(start) -> 

//const pet2 = pet.splice(2);
//console.log(pet2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế
// splice(start, deleteCount, item1, item2): thay thế
const pet3 = pet.splice(0, 1, "lion", false,100 );
console.log(pet);

//sort : sắp xếp các phần tử trong mảng theo chuẩn  unicode - 16

const random = [1, 1000, 10, 999];
console.log(random.sort());

const random2 = random.sort(function(a, b) {
	if(a > b) return 1; // sắp xếp theo tăng dần
	if(a < b) return -1;// sắp xếp theo giảm dần
})

console.log(random2);


//find nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoa mản điều kiện
const numbers = [1,99,999,1000,5,9];
//tìm phần tử đầu tiên lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
//Nếu không tìm thấy thì nó sẽ trả về undefined
console.log(findYourNumber);

//findIndex trả về vị trí đầu tiên thỏa mản điều kiện
//Nếu không tìm thấy trả về -1

//map duyệt qua từng phần tủ trong mảng trả về mảng mới không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];

const listNumberDouble = listNumber.map(function (value, index, array){
	return value * 2;
});

console.log(listNumberDouble);

const listNumberTriple = listNumber.forEach(function (value, index, array){
	return value * 3;
});

console.log(listNumberTriple);

//Sự khác nhau giữa map và foreach 
//map return đc còn foreach thì không
//foreach ko có return thì khoog có dừng

//filter thì dùng để sàng lọc các phần tử thỏa điều kiện nào đó
const biggerThanThree = listNumber.filter((item, i, a) => {
	return item > 3;
});

const biggerThanTwo = listNumber.filter((item) => item > 2) ;

console.log(biggerThanThree);
console.log(biggerThanTwo);

//.some : trả về true khi thỏa mãn điều kiện và ngược lại về false khi không thỏa mãn điều kiện
const someNumber = listNumber.some(value => value > 3);
//.every : chỉ trả về true khi tất cả điều kiện đếu tồn tại
const everyNumber = listNumber.every(value => value > 3);

//reduce gom các phần tử trong mảng thành 1
const totalNumber = listNumber.reduce(function(a,b) {
	return a + b;
}, 0);

console.log(totalNumber);

//By value -> giá trị đc lưu trong vùng bộ nhớ
//By referrences -> nói tới vùng bộ nhớ

//spread operator [...array] : clone lại mảng
//concat ->  gọp mãng 
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);

const mergeArray2 = [...array1,...array3];
console.log(mergeArray2);

//destructuring array 
const toys = ["ball", "sword", "arrow", "water", "fire"];

// const [indexname, indexname, ....] = toys;
const [ball, sword, fire, ...rest] = toys;
console.log(toys,rest);
//rest parameter

function demo(a,b,c, ...rest){
	console.log(a,b,c,rest);
}
demo(1,2,3,4,5,6,7);
