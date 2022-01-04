var number1 =  Math.floor(6* Math.random()) + 1 ; //generate a random number between 1 , 6
var dice1Img = "images/dice" + number1 + ".png" ;
document.querySelector(".img1").setAttribute("src" , dice1Img) ;

var number2 =  Math.floor(6* Math.random()) + 1 ; //generate a random number between 1 , 6
var dice2Img = "images/dice" + number2 + ".png" ;
document.querySelector(".img2").setAttribute("src" , dice2Img) ;

var msg ;
if(number1 > number2){
  msg = "	🚩 Player 1 wins!" ;
}else if(number2 > number1){
  msg = "Player 2 wins! 🚩 " ;
}else{
  msg = "Draw!"
}

document.querySelector("h1").innerHTML = msg ;
