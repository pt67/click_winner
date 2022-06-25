var pl = document.getElementById('plane');


//make a gravity for Plane;

var x =0;
var y=0;
var score = 0;


var timer_start = setInterval(makeMove, 10);

function makeMove(){
 x++;
 y++;


pl.style.transform = "translate("+ x +"px"+","+ y+"px)";


if(y >= 200){
  x = Math.floor(Math.random()*300);
  y = Math.floor(Math.random()*300);
  
 }
}



pl.onclick = ()=>{
score++

document.getElementById('score').innerHTML = score;
}

var time = 0;
setInterval(()=>{
time++;
document.getElementById('time').innerHTML = time + " Seconds left";

if(time == 60){
clearInterval(timer_start);
alert("Time Off. Restart the game again..")
}

}, 1000);
