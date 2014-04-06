$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
var ball = {x:20,y:20,radius:20,vx:5,vy:5};
  //run an iteration of the game
  var updateGame = function() {
    //PUT STUFF HERE
      context.beginPath();

    context.rect(0,0,width,height);  
  context.fillStyle='red';
  context.fill();
    context.closePath();

  context.beginPath();

  context.arc(ball.x,ball.y,ball.radius,20,20*Math.PI);
  context.fillStyle = 'black';
  context.fill();
  context.closePath();

  
  if((1/2)*ball.radius+ball.x==0){
        ball.vx = -ball.vx;

  }
  if(ball.x+ball.radius==width) {
    ball.vx = -ball.vx;
  } 
  if(ball.y+ball.radius==height){
       ball.vy = -ball.vy;

  }
  if((1/2)*ball.radius+ball.y==0) {
    ball.vy = -ball.vy;
  } 

  ball.x=ball.x+ball.vx;
  ball.y=ball.y+ball.vy;

  setTimeout(updateGame, 10);
  };

  updateGame();
  context.beginPath();
  context.arc(20,20,20,0,2*Math.PI);
  context.stroke()
});
