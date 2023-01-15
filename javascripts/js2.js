var msg = "My dog's name is everest!";
var  today = new Date();
msg += " ";
msg += today.toTimeString();
function updateMessage(){
    var el = document.getElementById("message");
    el.textContent=msg;
}

updateMessage();

