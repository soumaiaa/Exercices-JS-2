let image =document.querySelector('#image1');

image.addEventListener('mouseover' ,onHover);
function onHover() {


image.src ="./images/image1_2.jpg"

}
// image.addEventListener('mouseout' ,ofHover);
// function ofHover( {
//     image.scr='./images/image1.jpg'
// })
// // onmouseover.innerHTML ="<img src="./images/image1_2.jpg">"

//   let newDiv = document.createElement('div');
//   newDiv.classList.add('divHover');
//   newDiv.innerHTML='<img src="./images/image1_2.jpg">'
//   divClickable.parentElement.appendCHild(newDiv);

// onmouseover='images/image1_2.jpg';

// function voir(source) {
// 	document.querySelector( "#image1" ).src = source;
// }
// onmouseover="javascript:this.src='./images/image1_2.jpg';" onmouseout="javascript:this.src='./images/image1.jpg';"