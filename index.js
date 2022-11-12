// selcecting Element 
const colors = ["green","red","rgba(133,122,200)","#f15025"];
const button = document.querySelector("#button");
const color = document.querySelector(".color");

// variables


// Function

const f1 = () =>{
    let randomNumber = getRandomNumber(3);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
};


function getRandomNumber(limit) {
    return Math.floor(Math.random()*limit)+1;
};


// Add Event Listener
button.addEventListener("click", f1)
