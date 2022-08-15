const singleNode = document.querySelectorAll("h1");

for(let i=0; i<singleNode.length; i++){
    console.log(singleNode[i]);
}
console.log(singleNode);

const  container = document.getElementsByClassName("container"); //-> trả vê HTMLCoclection giống quẻySelectorAll
console.log(container);

const tagName = document.getElementsByTagName("h1");
console.log(tagName);