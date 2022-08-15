//1. getAttribute("attribute") vd href, class, style, 
const container =  document.querySelectorAll(".container");
console.log(container);
for (let i = 0; i < container.length; i++){
    container[i].setAttribute('class', `${container[i].getAttribute("class")} active`);
}

const link = document.querySelectorAll(".link");
link.forEach(function(value){
    value.setAttribute("target","_Blank");
});

container.forEach(function(value){
    value.removeAttribute("id");
});

for (let i = 0; i < container.length; i++){
    console.log(container[i].getAttribute("class"));
}

for (let i = 0; i < container.length; i++){
    container[i].setAttribute('class', `${container[i].getAttribute("class")} disable`);
}

//hasAttribute("") kiểm tra có attribute có k
