var number1 = (Math.floor(Math.random()*6))+1;
var number2 = (Math.floor(Math.random()*6))+1;
var s =  "images/dice";
document.querySelector(".dice .img1").setAttribute("src", s.concat(number1.toString(),".png"));
document.querySelector(".dice .img2").setAttribute("src", s.concat(number2.toString(),".png"));

if(number1>number2)
document.querySelector("h1").innerHTML = 'Player 1 Wins';
else if (number2>number1) {
  document.querySelector("h1").innerHTML = 'Player 2 Wins';
}
else{
  document.querySelector("h1").innerHTML = "It's a Tie";
}
