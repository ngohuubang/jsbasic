
function createNotification(title = "Welcome to notification"){
    const template = `
    <div class="noti">
        <img src="https://source.unsplash.com/random" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">
                ${title}
            </h3>
            <p class="noti-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos doloremque ea architecto explicabo veritatis? 
            </p>
        </div>
    </div>
`;

    //insertAdjacentHTML
    document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
    "Welcome to the first",
    "Welcome to the second",
    "Welcome to the third",
    "Welcome to the fourth",
    "Welcome to the fifth",
    "Welcome to the sixth",
    "Welcome to the seventh",
];

let lastTitle;

const timer = setInterval(function() {
    const item = document.querySelector(".noti");
    if(item){
        item.parentNode.removeChild(item);
    }
    
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if(lastTitle !== title){
        createNotification(title);
    }
    
    lastTitle = title;
},5000)