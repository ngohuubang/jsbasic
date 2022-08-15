// thêm xóa sửa node trong js 
//1. tạo node mới
const div = document.createElement('div');
const body = document.querySelector("body");
//2. đưa vào sử dụng append child
body.appendChild(div);
//3. thêm class vao element mới tạo
div.classList.add("container");
div.className = "container wrapper";
// div.textContent = 'Lorem asdbuqb qwe qqqqwe';

//
const card =  document.createElement("div");
body.appendChild(card);
card.classList.add("card");
// card.innerHTML = '<img src="https://source.unsplash.com/random" alt="" class="card-image"/>';


const cardImage = document.createElement('img');
card.appendChild(cardImage);
cardImage.setAttribute('src','https://source.unsplash.com/random');

// const cardImage = document.querySelector(".card .card-image");

cardImage.setAttribute('style', 'width:300px; height:300px; object-fit:cover; display:block; margin:0 auto')

//3. document.createTextNode
const text = document.createTextNode("Hello");

const h1 = document.createElement("h1");

body.appendChild(h1);

h1.appendChild(text);

//4. cloneNode
// const h1Clone = h1.cloneNode();
// body.appendChild(h1Clone);

const imgClone = card.cloneNode(true); //nếu true thì clone luôn bên trong
body.appendChild(imgClone);

//5. element.haschildNode -> kiểm tra phần tử có phần tử con hay k

console.log(h1.hasChildNodes());