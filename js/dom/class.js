//1. add class
// selector.classList.add

const containerActive = document.querySelector(".container .container-items");

console.log(containerActive);

if(containerActive.getAttribute("id") == "1"){
    containerActive.classList.add("active");
}
//2. selector.classList.remove("") xóa class ra khỏi class list
//3. selector.classList.contains("") kiểm tra class đó có tồn tại trong selector đó hay ko

console.log(containerActive.classList.contains("active"));

if(containerActive.classList.contains("active")){
    containerActive.classList.remove("active");
}

//4. selector.classList.toggle("is-active");// nếu có class r sẽ remove nếu chưa có thì thêm vào

containerActive.classList.toggle("active");

//5. selector.className -> trả ra chuối các class của querySelector
const title = document.querySelector(".title");
const titleClass = title.className;
console.log(titleClass);
const titleArr = titleClass.split(' ');
console.log(titleArr);

//thay thế class 
title.className = "title";
