// selecting Element

const button = document.querySelector("#button");
const color = document.querySelector(".color");

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


// function1

const function1 = () =>{
    let hexColor = "#";
    for(var x = 0; x < 6 ; x++){
        hexColor += hex[getRandomNumber()]; 
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
};

const getRandomNumber = () =>{
    return Math.floor(Math.random()*hex.length);
};
// add event listener
button.addEventListener("click",function1)