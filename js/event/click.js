const button = document.querySelector(".btn");
const span =  document.querySelector(".btn span");

function handleClick(){
    console.log("click me");
}


// span.addEventListener("click", function(e){
//     e.stopPropagation(); // ngăn chặn nổi bọt
//     //e.stopImmediatePropagation(); //chặn capturing
//     console.log("Click span");
// }, {capture: true});

// button.addEventListener("click", function(){
//     console.log("click me");
// });

//bubbling: nổi bọt , sự kiện chạy từ trong ra ngoài, sử dụng stopPropagation để ngăn chặn
//capturing: chạy từ ngoài vô trong

//target vs currentTarget

button.addEventListener("click", function(){
    console.log(`event.target: ${event.target}`); // nó sẽ chọn chính xác element click tới
    console.log(`event.currenttarget: ${event.currentTarget}`); // nó sẽ chọn phần tử mà mình click
});

