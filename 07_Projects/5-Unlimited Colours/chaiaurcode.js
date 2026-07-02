// Generate a random color
const randomColour = function(){
    let hex = '0123456789ABCDEF';
    let colour = '#';
    for(let i = 0; i < 6; i++){
        colour += hex[Math.floor(Math.random() * 16)]; // parseINT or Math.floor()
    }
    return colour;
}

let intervalId = null;

function changeBgColour(){
    document.body.style.backgroundColor = randomColour();
}
const startChangingColour = function(){
    if(!intervalId){ // intervalId == null
        intervalId = setInterval(changeBgColour, 1000); // 1 sec = 1000 millisec
    }
};
const stopChangingColour = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColour);
document.querySelector('#stop').addEventListener('click', stopChangingColour);