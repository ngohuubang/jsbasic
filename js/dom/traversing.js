//1. parentNode, parentElement, removeChild
// parentNode vs parentElement : lấy phần tử cha của cái DOM đó
const span = document.querySelector(".span");
console.log(span.parentElement.parentNode);
console.log(span.parentNode);

//removeChild 
//selector.parentNode hoặc selector.parentElement.removeChild(selector)

// span.parentElement.removeChild(span);
// span.remove();

//2.nextElementSibling cs previousElementSibling tìm lấy phần tử trc và sau cái DOM đó

const nextSpan = span.nextElementSibling;
const prevSpan = span.previousElementSibling;
console.log(nextSpan);
console.log(prevSpan);

//3. childNodes: trả về hết các Node bên trong bao gồm cả textNode vs children: trả về các Node không bao gồm textNode vs children trả về HTMLColection
console.log(span.childNodes);
console.log(span.children);
console.log(span.children[1]);

//4. firstChild vs firstElementChild
console.log(span.firstChild);
console.log(span.firstElementChild);

//5. lastChild vs lastElementChild giống số 4

//6. nextSibling vs prevSibling giống childNodes vs childrent

console.log(span.nextElementSibling.nextElementSibling);