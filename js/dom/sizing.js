//1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop

function log(value){
    console.log(value);
}

function query(value){
    const constt = document.querySelector(value);
    return constt;
}

const boxed = query(".boxed");
// log(boxed.offsetWidth); //độ rộng của phần tử
// log(boxed.offsetHeight); // chiều cao của phần tử
// log(boxed.offsetLeft); //khoảng cách so với khung bên trái
// log(boxed.offsetTop); //khoảng cách so với khung ở trên
// log(boxed.offsetParent); //lấy ra phần tử cha để lấy giá trị của phần tử cha

// //2. clientWidth, clientHeight, clientLeft, clientTop
// log(boxed.clientWidth); //lấy độ rộng trừ đi border
// log(boxed.clientHeight);
// log(boxed.clientLeft); //vị trí của nó so với bên trái với border
// log(boxed.clientTop); 

// //3. window,innerWidth, window,outerWidth, window.innerHeight, window.outerHeight
// log(window.innerHeight); //chiều cao khung hiển thị web 
// log(window.outerHeight); //chiều cao khung trình duyệt
// log(boxed.innerWidth); 
// log(boxed.outerHeight);

//4. selector.getBoundingClientRect() lấy vị trí tọa độ và kích thước của selector
// log(boxed.getBoundingClientRect());

//left, x: vị trí của khối so với bên trái
//top, y: vị trí của khôi so với phía trên
//bottom: chiều cao của khối +  top
//right: độ rộng của khối + left
//width, height : độ rộng và chiều cao của khối

//5. Sự khác nhau của Node List và HTML Collection

const li = document.getElementsByTagName("li"); //HTML Colection
const li2 = document.querySelectorAll("li"); //Node List

log(li);
log(li2);

// Giống : có thể truy cập bằng index, có độ dài(length), không sử dụng đc những phương thức của mảng : pop, push, shift, map, filtẻr
// HTML Colection: không sử dụng đc forEach
// NodeList : sử dụng đc forEach

//6. Sự khác nhau giữa parentNode và parentElement

//Node lấy toàn bộ bao gồm cả comment và textNode(xuống dòng)
// parentElenment có thể null 
// documentElement.parentElement ->  lấy thẻ HTML
log(document.documentElement.parentElement); //--> null
log(document.documentElement.parentNode); // lấy lại chính nó nếu không có phần tử cha bao ngoài 
 
