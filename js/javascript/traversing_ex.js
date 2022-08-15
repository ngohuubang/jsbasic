const modal = document.querySelector(".modal");

if(modal){
    setTimeout(function(){
        modal.classList.toggle("is-show");
    }, 3000)
}

const modalClose = document.querySelector(".modal .modal-content .modal-close");
console.log(modalClose);

modalClose.addEventListener("click",function(){
    modal.classList.toggle("is-show");
});