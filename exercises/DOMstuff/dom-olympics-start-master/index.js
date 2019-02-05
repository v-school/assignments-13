
document.getElementById("header").innerHTML = `<h1 class="header"> JavaScript wrote this!!! </h1> <h5 class="header"> <div> <span class="name"> Danny </span> wrote the Javascript</h5></div>`

//why can  jessie  use backticks (`) after innerHTML and I use " " and they still both behave the same way
document.getElementsByClassName("message left")[0].innerHTML = "Hey man, what's up?"
document.getElementsByClassName("message right")[0].innerHTML = "What do you call a man with a rubber toe?"
document.getElementsByClassName("message left")[1].innerHTML = "Oh god...I don't know"
document.getElementsByClassName("message right")[1].innerHTML = "Roberto....get it! hahahaha"



function clearFields(){
    document.getElementsByClassName("messages")[0].textContent = "";
}

document.getElementById("clear-button").addEventListener("click", clearFields)




function newMessage(){
var newMessage = document.createElement("div")

newMessage.className = "message right";

newMessage.textContent = document.getElementById("messageInput").value;

document.getElementsByClassName("messages")[0].appendChild(newMessage);
}












// // function clearConversation(){
//     document.getElementsByClassName("messages")[0].reset("messages");
// }

// // document.getElementById("clear-button").addEventListener("click", clearConversation)
// document.getElementsByClassName("clear-button").addEventListener("click", clearConversation)
