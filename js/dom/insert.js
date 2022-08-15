//1. insertAdjacentText 
const h3 = document.querySelector('h3');
//h3.insertAdjacentText("position", "text");
//position: beforebegin, afterbegin, beforeend, afterend
// h3.insertAdjacentText("beforebegin","beforebegin");
// h3.insertAdjacentText("afterbegin","afterbegin");
// h3.insertAdjacentText("beforeend","beforeend");
// h3.insertAdjacentText("afterend","afterend");


//2. insertAdjacentElement
const strong = document.createElement("strong");
strong.className = "bold";
h3.insertAdjacentElement("beforeend", strong);
strong.innerText = "Hello"

//3. element.insertAdjacentHTML

const template = `
<ul class="menu">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
`;

document.body.insertAdjacentHTML("afterbegin",template);

//parse