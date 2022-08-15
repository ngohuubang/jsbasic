//1. text content
const container =  document.querySelectorAll(".container");

container.forEach(function(value, index){
    value.textContent = `Hello ${index + 1}`;
})

//2. inner text //không lấy đc nếu có display: none;
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent);
console.log(spinner.innerText);

//3. innerHTML
console.log(spinner.innerHTML);
spinner.innerHTML = '<div class="demo">hello HTML</div>'
