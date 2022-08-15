// document.title
// document.head

console.log(document.title);
document.title = "DOM";

console.log(document.head);

const meta = document.createElement("meta");
{/* <meta charset="UTF-8"></meta> */}
meta.setAttribute("charset", "UTF-8");
// document.head.appendChild(meta);

const head = document.getElementsByTagName("head");
console.log(head);
head[0].appendChild(meta);

//insertBefore 
//parentNode.insertBefore(newNode, existingNode) //existingNode: node đã tồn tại

const ul = document.querySelector("ul");

document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);

// replaceChild
// node.replaceChild(newnode, oldnode);

const span = document.createElement("span");
span.textContent = "ABC";
document.body.replaceChild(span,  document.querySelector(".boxed"));

//convert HTML Colection, NodeList to Array

const li = document.getElementsByTagName("li");

//Array.from(HTML collection or NodeList)
//[...HTMlCOLECTION], [...NODELIST]

[...li].forEach(function(value){
    console.log(value);
});