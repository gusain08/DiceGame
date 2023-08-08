let start  = document.querySelector('.button');




start.addEventListener('click',()=>{
        
let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomImages = "dice" + randomNumber + ".png";
let randomImageSrc = "images/" + randomImages;


let img1  = document.querySelector('.img1');
img1.setAttribute('src', randomImageSrc);



let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImages1 = "dice" + randomNumber1 + ".png";
let randomImageSrc1 = "images/" + randomImages1;
let img2  = document.querySelector('.img2');
img2.setAttribute('src',randomImageSrc1);

if(randomNumber > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 1  is Win"
}   else  if(randomNumber1>randomNumber){
    document.querySelector('h1').innerHTML = "Player 2  is Win"
}else{
    document.querySelector('h1').innerHTML = "Draww"
}
});