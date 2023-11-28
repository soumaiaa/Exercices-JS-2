let text =document.querySelector("#lastname");
text.addEventListener('keydown',textfunc);
function textfunc(event){
    let message=event.key;
    alert(message);
}