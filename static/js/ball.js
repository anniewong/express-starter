$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
var x = 20;
  //run an iteration of the game
  var updateGame = function() {
    //PUT STUFF HERE
      context.beginPath();

    context.rect(0,0,width,height);  
  context.fillStyle='red';
  context.fill();
    context.closePath();

  context.beginPath();

  context.arc(x,20,20,20,20*Math.PI);
  context.fillStyle = 'black';
  context.fill();
  context.closePath();
  
  x=x+5;
  setTimeout(updateGame, 10);
  };

  updateGame();
  context.beginPath();
  context.arc(20,20,20,0,2*Math.PI);
  context.stroke()
});
