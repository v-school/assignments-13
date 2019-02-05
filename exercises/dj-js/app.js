//Step 1 
var box = document.getElementsByClassName("red-box")[0];
var body = document.getElementById("body");
// var backgroundColorChange = event.target.style.backgroundColor; <----- Why does this break my entire code? 
// when I insert this custom var into a function, it makes all other functions stop working 
function disapearringBox(event){
   event.target.style.backgroundColor = "blue";
}

function returnToNormal(event){
    event.target.style.backgroundColor = "#3F0E40";
}

function changeToRed(event){
    event.target.style.backgroundColor = "red"
}

function changeToYellow(event){
    event.target.style.backgroundColor = "yellow"
}

function changeToGreen(event){
    event.target.style.backgroundColor = "green"
}


function changeToOrange(event){
    if(event.target.style.backgroundColor !== "orange"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="orange";}
    }  

function typingColor(event){
    if(event.key === "b"){
        event.target.style.backgroundColor = "blue";
    }
}

box.addEventListener("mouseover", disapearringBox);
box.addEventListener("pointerleave", returnToNormal);
box.addEventListener("mousedown", changeToRed);
box.addEventListener("mouseup", changeToYellow);
box.addEventListener("dblclick", changeToGreen);
body.addEventListener("wheel",changeToOrange);
document.addEventListener("keypress", typingColor);

//B = 66 blue R = 82 red Y = 89 yellow O = 79 orange G = 71 green