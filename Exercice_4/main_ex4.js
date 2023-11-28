let formus=document.querySelectorAll('input')
console.log(formus);
let button =document.querySelector('button')
console.log(button);
formus.forEach(formu=> {
button.addEventListener ('click', OnClick)

function OnClick(){
    formu.value="";
};
});

