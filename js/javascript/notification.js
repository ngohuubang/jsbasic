const notify = document.querySelectorAll(".notify");

for (let i = 0; i < notify.length; i++) {
    if(notify[i]){
        setInterval(function(){
            notify[i].classList.toggle("is-show");
        },4000)
    }
}

